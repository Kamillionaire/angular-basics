namespace Lesson03.View{
  export class ViewController {
    private autoResource: ng. resource.IResourceClass<Models.Auto>;

        public message: string = 'Hello World'
        public filter: string = '';

        public autoViews: Models.Auto[] = [];
        public autos: Models.Auto[]= [];

        constructor(
          $resource: ng.resource.IResourceService
        ){
          this.autoResource = $resource<Models.Auto>('data/autos.json');

          this.autos = this.autoResource.query();
          this.autoViews = this.autos;
        }
        // event handler
        public filterAutos(): void {
          this.autoViews = this.autos.filter((item: Models.Auto): boolean =>{
              return item.make.indexOf(this.filter) > -1;
          })
      }
  }


}
