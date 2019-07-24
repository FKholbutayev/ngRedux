import { Component } from '@angular/core';
import { Store } from './store';


@Component({
  selector: 'app-root',
  template: `
    <div>
      <songs-playlist></songs-playlist>
      <songs-listened></songs-listened>
      <songs-favourites></songs-favourites>
    </div>
  `
})
export class AppComponent {
   
}
