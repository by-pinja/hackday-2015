// Configuration
var host = "http://localhost:3000/";
var squareSize = 5;

// Globals
var players = null;

var gameDiv = d3.select("#game");
var mainSvg = gameDiv.append("svg").attr("id", "gameSvg");
var levelG = mainSvg.append("g").attr("id", "level");
var appleG = mainSvg.append("g").attr("id", "apple");
var snakeAG = mainSvg.append("g").attr("id", "snakeA");
var snakeBG = mainSvg.append("g").attr("id", "snakeB");
var timeSpan = d3.select("#timeLeft");

var socket = io(host);
socket.on('connect', function () {
    console.log("Connection");

    socket.on('start', function(data) {
        players = data.players;
        console.log("Start. Players 1: " + players[0].name + ' Player 2: ' + players[1].name);
        d3.select("#player1Name").text(players[0].name);
        d3.select("#player2Name").text(players[1].name);
        d3.select("#player1Winner").classed("hidden", true);
        d3.select("#player2Winner").classed("hidden", true);
        d3.select("#outOfTimeCaption").classed("hidden", true);
        console.log(data);
        var level = data.level;
        refreshLevel(level);
    });

    socket.on('positions', function (data) {
        refreshSnakes(data.snakes);
        refreshLengths(data.snakes);
        refreshTime(data.timeLeft);
    });

    socket.on('apple', function(apple) {
        console.log("Apple: " + apple);
        refreshApple(apple);
    });

    socket.on('end', function(data) {
        console.log("END");
        console.log(data);

        var winners = data.winners;
        if(winners.length != 1)  {
            console.log("TIE.");
            d3.select("#player1Winner").classed("hidden", false).text("TIE!");
            d3.select("#player2Winner").classed("hidden", false).text("TIE!");
        } else if(winners[0] == 1) {
            console.log(players[1].name + " won! (Player 2)");
            d3.select("#player2Winner").text("WINNER!").classed("hidden", false);
        } else if(winners[0] == 0) {
            console.log(players[0].name + " won! (Player 1)");
            d3.select("#player1Winner").text("WINNER!").classed("hidden", false);
        }
    })

});

/**
 * Refresh level
 * @param level {Object}    Level data
 */
function refreshLevel(level) {

    mainSvg.attr("width", level.width * squareSize)
           .attr("height", level.height * squareSize);

    var map = level.map;
    // Always re-create the whole level because it isn't done often and it's the simplest way.
    d3.selectAll(".gameRow").remove();

    var rowG = levelG.selectAll(".gameRow")
        .data(map)
        .enter()
        .append("g")
        .classed("gameRow", true);

    var pixelRect = rowG.selectAll(".gameLevelRect")
        .data( function(d,i) {return d;})
        .enter()
        .append("rect");

    pixelRect
        .attr("x", function(d, i, j) { return i*squareSize; })
        .attr("y", function(d, i, j) { return j*squareSize; })
        .attr("width", squareSize+0.5)
        .attr("height", squareSize+0.5)
        .attr("style", function(d, i, j) {
            var blue = (d == 0) ? 0 : 255;
            return "fill:rgb(0,0, " + blue + ");";
        });
}

/**
 * Refresh snake DIV elements
 */
function refreshSnakes(snakes) {
    refreshSnake("snakeA", snakes[0].body, "rgb(255,255,0)", snakeAG);
    refreshSnake("snakeB", snakes[1].body, "rgb(0,255,255)", snakeBG);
}

/**
 * Refresh specified snake DOM elements
 * @param snakeClass {String}   Name of the CSS class which is used for the DOM elements of specified snake
 * @param snake {Object}        Snake data
 * @param colorFill {String}    CSS color fill value of the snake. E.g. "rgb(255,255,0)"
 * @param element {Object}      Parent DIV element where to add snake DIV elements
 */
function refreshSnake(snakeClass, snake, colorFill, element) {

    var refreshCommonSnakeAttr = function(elem) {
        elem.attr("x", function(d) { return d[0]*squareSize;})
            .attr("y", function(d) { return d[1]*squareSize;});
    };

    var rect = element.selectAll("." + snakeClass)
        .data(snake);

    // Update
    refreshCommonSnakeAttr(rect);

    // Enter
    var enterRect = rect.enter()
        .append("rect")
        .attr("class", snakeClass)
        .attr("width", squareSize)
        .attr("height", squareSize)
        .attr("style", "fill:" + colorFill + ";");
    refreshCommonSnakeAttr(enterRect);

    // Exit
    rect.exit().remove();
}

/**
 * Refreshes time left
 * @param timeLeft  Amount of time left
 */
function refreshTime(timeLeft) {
    var seconds = Math.ceil(timeLeft / 1000);
    if(seconds == 0) {
        d3.select("#outOfTimeCaption").classed("hidden", false);
    }
    timeSpan.text(seconds);
}

function refreshLengths(snakes) {
    for(i=0; i<snakes.length; i++) {
        d3.select("#playerLength" + i).text(snakes[i].growLength);
    }
}

/**
 * Refresh apple DOM elements
 * @param apple {Object}    Apple data
 */
function refreshApple(apple) {
    var element = appleG;
    var appleClass = "apple";
    var appleRadius = squareSize/2.0;
    var circle = element.selectAll("." + appleClass)
        .data([0]);

    var refreshCommonAppleAttr = function(elem) {
        elem.attr("cx", apple[0]*squareSize + appleRadius)
            .attr("cy", apple[1]*squareSize + appleRadius);
    };

    // UPDATE
    refreshCommonAppleAttr(circle);

    // ENTER
    var enterCircle = circle.enter()
        .append("circle")
        .attr("class", appleClass)
        .attr("r", appleRadius)
        .attr("fill", "red");
    refreshCommonAppleAttr(enterCircle);

    // EXIT
    circle.exit().remove();
}