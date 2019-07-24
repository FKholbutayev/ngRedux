import { Component } from "@angular/core";
import { Store } from "../../../store";



@Component({
    selector:'songs-playlist', 
    template: `
        <div class="songs">
            playlist
        </div>
    `
})

export class SongsPlaylistComponent {
    constructor(private store:Store) {

    }
}