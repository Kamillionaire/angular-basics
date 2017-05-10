"use strict";
var Lesson02;
(function (Lesson02) {
    var ViewController = (function () {
        function ViewController($resource) {
            this.autoViews = [];
            this.autos = [];
            this.message = 'Hello World';
            this.filter = '';
            var autoResource = $resource('data/autos.json');
            this.autos = autoResource.query();
            this.autoViews = this.autos;
        }
        // event handler
        ViewController.prototype.filterAutos = function () {
            var _this = this;
            this.autoViews = this.autos.filter(function (item) {
                return item.make.includes(_this.filter);
            });
        };
        return ViewController;
    }());
    angular
        .module('app.view', [])
        .controller('ViewController', ViewController);
})(Lesson02 || (Lesson02 = {}));
