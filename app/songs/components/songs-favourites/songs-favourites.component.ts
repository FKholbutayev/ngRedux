import { Component } from "@angular/core";
import { Store } from "../../../store";



@Component({
    selector:'songs-favourites', 
    template: `
        <div class="songs">
            songs favourite
        </div>
    `
})

export class SongsFavouriteComponent {
    constructor(private store:Store) {
        
    }
}