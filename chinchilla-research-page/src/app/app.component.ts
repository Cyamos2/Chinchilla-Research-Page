import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chinchilla-research-page';
}

//We import the necessary Component decorator from @angular/core.
//The @Component decorator is used to define the metadata for the AppComponent.
//The selector is set to 'app-root', which corresponds to the HTML element where this component will be rendered.
//The templateUrl points to the app.component.html file.
//The styleUrls array includes the app.component.css file for styling.