namespace Lesson06.View.Auto {
    let module:ng.IModule = angular.module('view.auto', []);

    module.config(Auto.Configuration);

    module.controller('AutoController', Auto.AutoController);
}
