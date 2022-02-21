import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  vonv="Please Fill The Form"

  title = 'angular-elements-registration-form';
  onEvent(event:any){
    console.log(event);
    

  }
}
