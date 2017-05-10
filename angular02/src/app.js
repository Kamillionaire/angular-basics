"use strict";
var Lesson02;
(function (Lesson02) {
    var ApplicationController = (function () {
        function ApplicationController() {
        }
        return ApplicationController;
    }());
    angular.module('app', [
        /* third party module */
        'ngResource',
        /* Application Modules*/
        'app.view'
    ])
        .controller('ApplicationController', ApplicationController);
})(Lesson02 || (Lesson02 = {}));
