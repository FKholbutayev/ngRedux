import { Component, OnInit } from "@angular/core";
import { Store } from "../../../store";
import { SongsService } from "../../services/songs.service";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map'; 


@Component({
    selector:'songs-favourites', 
    template: `
        <div class="songs">
            <songs-list 
            [list]="favourites$|async"
            (toggle)="onToggle($event)">
            Favourites</songs-list>
        </div>
    `
})

export class SongsFavouriteComponent implements OnInit {
    favourites$ : Observable<any[]>
    constructor(private store:Store, 
                private songsService:SongsService) {
        
    }

    ngOnInit() {
        this.favourites$ = this.store.select('playlist')
            .filter(Boolean)
            .map(playlist => playlist.filter(track => track.favourite));
        
    }
    onToggle(event) {
        this.songsService.toggle(event)
    }
    
}