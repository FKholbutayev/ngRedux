import { Component } from "@angular/core";
import { Store } from "../../../store";



@Component({
    selector:'songs-listened', 
    template: `
        <div class="songs">
            listened
        </div>
    `
})

export class SongsListenedComponent {
    constructor(private store:Store) {
        
    }
}