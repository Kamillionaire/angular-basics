namespace Lesson04{

    let module:ng.IModule = angular.module ('app' , [

      /* third party module */
      'ngResource',
      'ui.router',

      /* Application Modules*/

      'app.view'
    ]);

    module.config(Lesson04.Configuration)
}
