## desing
https://codepen.io/sdthornton/pen/wBZdXq

## help command
https://github.com/angular/angular-cli/wiki/generate

## create component & module using command line and use it to display
    To create component : ng g c <componentname>

## 7 Lessions to Angular.io
    To understand angular

## Excercise
# example 1: Input
    Text change will be apear to paragraph tag (Update text field value to paragraph tag)

# example 2: Button
    Show/Hide on button click

# CLI
to generate component
    ng g c heroes
to generate service
    ng g s hero --module=app
to generate routing app module
    ng generate module app-routing --flat --module=app
        --flat puts the file in src/app instead of its own folder.
        --module=app tells the CLI to register it in the imports array of the AppModule.

Observable
Promise
Router parameter
    snapshot / subscribe
form
    template drive / reactive
service injectable
interface
invironment
package json
angular cli
jquery / bootstrap
even driven - host listner directive
parent child component Input/Output
http sevice
scss/
conditional class & style
pipe
- socket sails.socket.io

=============
what is?
@    : decorator
[()] :
{{}} :
*ngFor : is Angular's repeater directive
*ngIf  : conditionally block

@Input() decorator
@Injectable() decorator

DI   :
RxJS :

data from anywhere—a web service, local storage, or a mock data source.

refactored: data from hereservice class
    provided "hereservice" -> AppModule;  so that it can be injected anywhere. (use Angular-DI to inject anywhere)
        - asynchronous singnature - Observable (RxJS Observable library)
        - RxJS of() to return an Observable; of mock heroes (Observable<Hero[]>)
        - ngOnInit - to calls the HeroService
        - MessageService - to log with HeroService class

directive: RouterOutlet
=======
The RouterOutlet is one of the router directives that became available to the AppComponent because AppModule imports AppRoutingModule which exported RouterModule.