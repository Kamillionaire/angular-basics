namespace Lesson05{

    let module:ng.IModule = angular.module ('app' , [

      /* third party module */
      'ngResource',
      'ui.router',
      'ui.router.state.events',
      /* Application Modules*/

      'app.view'
    ]);

    module.config(Lesson05.Configuration);

    module.service('AccountService', Lesson05.Services.AccountService);

    module.run(Lesson05.Run);
}
