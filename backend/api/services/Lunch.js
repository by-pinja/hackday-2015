'use strict';

// Module dependencies
var request = require("request");
var cheerio = require('cheerio');
var _ = require('lodash');

/**
 * /api/services/Lunch.js
 *
 * Lunch data fetch service which contains helper methods for lunch data fetch + handling.
 */

/**
 * Service code that contains all necessary methods to fetch lunch information from restaurant web-site.
 *
 * Note that all methods have the same parameters.
 *
 * @type {{
 *  fetchShalimar: Function,
 *  fetchAsema: Function,
 *  fetchTrattoria: Function,
 *  fetchBest: Function,
 *  fetchDynamo: Function,
 *  fetchAntell: Function,
 *  fetchKirveli: Function,
 *  fetchCoriander: Function,
 *  _fetchData: Function
 * }}
 */
module.exports = {
  /**
   * Method to fetch Shalimar lunch information.
   *
   * @param   {function}  next
   */
  fetchShalimar: function fetchShalimar(next) {
    var _this = this;

    var parser = function parser(error, response, body) {
      if (error) {
        next(error, null);
      } else {
        var $ = cheerio.load(body);
        var dishes = [];

        $('table.todayLunch td.dish').each(function iterator() {
          dishes.push($(this).text());
        });

        next(null, _.compact(dishes).join('<br />'))
      }
    };

    _this._fetchData('http://www.ravintolashalimar.fi/', parser);
  },
  /**
   * Method to fetch Asemaravintola lunch information.
   *
   * @param   {function}  next
   */
  fetchAsema: function fetchAsema(next) {
    var _this = this;

    var parser = function parser(error, response, body) {
      if (error) {
        next(error, null);
      } else {
        var $ = cheerio.load(body);
        var dishes = $('div.rightcolumn').find('p').eq(0).text().split('\n');

        // Remove current date
        dishes.shift();

        next(null, _.compact(dishes).join('<br />'))
      }
    };

    _this._fetchData('http://vanhaasemaravintola.fi/lounaslista/', parser);
  },
  /**
   * Method to fetch Trattorian aukio lunch information.
   *
   * @param   {function}  next
   */
  fetchTrattoria: function fetchTrattoria(next) {
    var _this = this;

    var parser = function parser(error, response, body) {
      if (error) {
        next(error, null);
      } else {
        var $ = cheerio.load(body);
        var dishes = [];
        var currentDayElement = $('#days-chooser').find('div.day-option.active');
        var currentDate = currentDayElement.data('date');
        var currentDay = currentDayElement.find('span.long').text().trim();

        $('#lunches-holder')
          .find('span.long:contains("' + currentDay + ' ' + currentDate +'")')
          .closest('.lunch-day').find('h4')
          .each(function iterator() {
            dishes.push($(this).find('span').eq(0).text().trim());
          })
        ;

        // Remove "week" dish
        if (dishes.length > 1) {
          dishes.pop();
        }

        next(null, _.compact(dishes).join('<br />'))
      }
    };

    _this._fetchData('https://www.raflaamo.fi/fi/jyvaskyla/trattoria-aukio', parser);
  },
  /**
   * Method to fetch Pizza Best lunch information.
   *
   * @param   {function}  next
   */
  fetchBest: function fetchBest(next) {
    var _this = this;

    var parser = function parser(error, response, body) {
      if (error) {
        next(error, null);
      } else {
        var $ = cheerio.load(body);
        var days = [
          'Su',
          'Ma',
          'Ti',
          'Ke',
          'To',
          'Pe',
          'La'
        ];

        var lines = _.map($('div.centerColumn div').text().match(/[^\r\n]+/g), function iterator(line) {
          return line.trim();
        });

        var date = new Date();
        var match = new RegExp('^' + days[date.getDay()] + ': ');
        var dishes = _.find(lines, function iterator(line) {
          if (match.test(line)) {
            return true;
          }
        });

        if (dishes) {
          dishes = dishes.substr(3).trim();
        }

        next(null, dishes);
      }
    };

    _this._fetchData('http://www.pizzeriabest.fi/onlinetilaus/index.php?main_page=page&id=1', parser);
  },
  /**
   * Method to fetch Dynamo lunch information.
   *
   * @param   {function}  next
   */
  fetchDynamo: function fetchDynamo(next) {
    var _this = this;

    var parser = function parser(error, response, body) {
      if (error) {
        next(error, null);
      } else {
        var $ = cheerio.load(body);
        var dishes = [];

        $('.lunch_desc').each(function() {
          var dishElement = $(this);
          var dish = [];

          dish.push(dishElement.find('span.fi.title').text());
          dish.push(dishElement.find('span.fi.desc').text());

          dishes.push(_.compact(dish).join(' ja '));
        });

        next(null, _.compact(dishes).join('<br />'));
      }
    };

    _this._fetchData('http://www.sodexo.fi/jamk-dynamo', parser);
  },
  /**
   * Method to fetch Antell lunch information.
   *
   * @param   {function}  next
   */
  fetchAntell: function fetchAntell(next) {
    var _this = this;

    var parser = function parser(error, response, body) {
      if (error) {
        next(error, null);
      } else {
        var days = [
          'Sunnuntai',
          'Maanantai',
          'Tiistai',
          'Keskiviikko',
          'Torstai',
          'Perjantai',
          'Lauantai'
        ];

        var date = new Date();
        var $ = cheerio.load(body);
        var dishes = [];

        $('#lunch-content-table')
          .find('table td h2:contains("' + days[date.getDay()] +'")')
          .closest('table')
          .find('tr:not(.space)')
          .each(function iterator(index) {
            if (index !== 0) {
              dishes.push($(this).find('td').eq(1).text().replace(/^\s+|\s+$/gm, ''));
            }
          })
        ;

        next(null, _.compact(dishes).join('<br />'))
      }
    };

    _this._fetchData('http://www.antell.fi/lounaslistat/lounaslista.html?owner=84', parser);
  },
  /**
   * Method to fetch Kirveli lunch information.
   *
   * @param   {function}  next
   */
  fetchKirveli: function fetchKirveli(next) {
    var _this = this;

    var parser = function parser(error, response, body) {
      if (error) {
        next(error, null);
      } else {
        var days = [
          'Sunnuntaina',
          'Maanantaina',
          'Tiistaina',
          'Keskiviikkona',
          'Torstaina',
          'Perjantaina',
          'Lauantaina'
        ];

        var date = new Date();
        var $ = cheerio.load(body);
        var dishes = [];

        $('#menu')
          .find('h3:contains("' + days[date.getDay()] + '")')
          .closest('section')
          .find('ul li')
          .each(function iterator() {
            dishes.push($(this).find('p.dish').text().replace(/\s+/g, ' ').trim());
          })
        ;

        next(null, _.compact(dishes).join(', '));
      }
    };

    _this._fetchData('http://lounaat.info/lounas/kirveli/tampere', parser);
  },
  /**
   * Method to fetch Coriander lunch information.
   *
   * @param   {function}  next
   */
  fetchCoriander: function fetchCoriander(next) {
    var _this = this;

    var parser = function parser(error, response, body) {
      if (error) {
        next(error, null);
      } else {
        var days = [
          'tab-sunday',
          'tab-monday',
          'tab-tuesday',
          'tab-wednesday',
          'tab-thursday',
          'tab-friday',
          'tab-saturday'
        ];

        var date = new Date();
        var $ = cheerio.load(body);
        var dishes = [];

        $('#' + days[date.getDay()])
          .find('h5')
          .each(function iterator() {
            var dish = $(this).text().replace(/\s+/g, ' ').trim().replace(/^([0-9]\.)/, '').trim();

            dishes.push(dish);
          })
        ;

        next(null, _.compact(dishes).join('<br />'));
      }
    };

    _this._fetchData('http://www.coriander-restaurant.com/', parser);
  },
  /**
   * Generic url data fetcher function
   *
   * @param   {string}    url   Url to fetch
   * @param   {function}  next  Callback function
   * @private
   */
  _fetchData: function _fetchData(url, next) {
    request({
      uri: url,
      method: 'GET',
      timeout: 10000,
      followRedirect: true,
      maxRedirects: 10,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36'
      }
    }, next);
  }
};
