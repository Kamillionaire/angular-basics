namespace Lesson02{
    class ApplicationController{

    }
    angular.module ('app' , [
      /* third party module */
      'ngResource',

      /* Application Modules*/

      'app.view'
    ])
    .controller('ApplicationController', ApplicationController);
}
