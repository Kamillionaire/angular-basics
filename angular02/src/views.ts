namespace Lesson02{
    class ViewController {
      public autoViews = [];
        public autos: any = [];
        public message: string = 'Hello World'
        public filter: string = '';
        constructor(
          $resource: ng.resource.IResourceService
        ){
          let autoResource = $resource
          ('data/autos.json');

          this.autos = autoResource.query();
          this.autoViews = this.autos;
        }
        // event handler
        public filterAutos(): void {

          this.autoViews = this.autos.filter((item:any)=>{
              return item.make.includes(this.filter);
          })
      }
  }
    angular
        .module('app.view', [])
        .controller
        ( 'ViewController', ViewController);
}
