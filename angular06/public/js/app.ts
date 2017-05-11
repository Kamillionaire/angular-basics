namespace Lesson06{

    let module:ng.IModule = angular.module ('app' , [

      /* third party module */
      'ngResource',
      'ui.router',
      'ui.router.state.events',
      /* Application Modules*/

      'app.view'
    ]);

    module.config(Lesson06.Configuration);

    module.service('AccountService', Lesson06.Services.AccountService);

    module.run(Lesson06.Run);
}
