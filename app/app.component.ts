import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <div>
      <div *ngFor="let todo of todos$ | async">
        {{ todo.name }}
      </div>
    </div>
  `
})
export class AppComponent {

 
}
