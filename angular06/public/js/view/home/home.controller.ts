namespace Lesson06.View.Home {
    export class HomeController {
        public message: string = 'A Brave New World!';

        constructor(
            private AccountService: Lesson06.Services.AccountService
        ) {

        }
        public isLoggedIn(): boolean {
            return this.AccountService.isLoggedIn();

        }
          // event handlers

          public logUserIn(): void {
              this.AccountService.logUserIn();
          }
          public logUserOut(): void {
              this.AccountService.logUserOut();
          }
    }
}
