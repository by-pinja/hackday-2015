
angular.module('messager', [
  'ngRoute',
  'messager.message'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/', {
      controller: 'MessageController',
      templateUrl: '/messager/message/partials/message.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
