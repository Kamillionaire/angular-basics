namespace Lesson05.View.Auto {
    export function Configuration (
        $stateProvider: ng.ui.IStateProvider
    ){
      $stateProvider
          .state('Auto', <ng.ui.IState>{
              url: '/auto',
              controller: 'AutoController',
              controllerAs: 'vm',
              templateUrl: 'js/view/auto/auto.html',
              // secures route
              data: {
                requiresAuthentication: true
              }
          });
    }
}
