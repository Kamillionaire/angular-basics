namespace Lesson03{

    let module:ng.IModule = angular.module ('app' , [
      /* third party module */
      'ngResource',

      /* Application Modules*/

      'app.view'
    ])
    module.controller('ApplicationController',
    Lesson03.ApplicationController);
}
