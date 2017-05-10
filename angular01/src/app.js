"use strict";
var Lesson01;
(function (Lesson01) {
    var ApplicationController = (function () {
        function ApplicationController() {
            this.message = 'Hello World';
            this.name = "visitor";
        }
        return ApplicationController;
    }());
    angular.module('app', [])
        .controller('ApplicationController', ApplicationController);
})(Lesson01 || (Lesson01 = {}));
