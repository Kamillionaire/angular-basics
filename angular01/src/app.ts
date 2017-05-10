namespace Lesson01 {
    class ApplicationController{
        public message: string = 'Hello World';
        public name: string = "visitor"
    }


  angular.module('app', [

  ])
  .controller('ApplicationController', ApplicationController);
}
