import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'gocode-shop';
  title = 'Tour of Heroes';
  onSave(){
    console.log("Saved!!");
  }
  
}
