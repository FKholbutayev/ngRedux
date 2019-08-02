import { Component, OnInit } from "@angular/core";
import { Store } from "../../../store";
import { SongsService } from "../../services/songs.service";
import { Observable } from "rxjs/Observable";



@Component({
    selector:'songs-listened', 
    template: `
        <div class="songs">
        <songs-list
        [list]="listened$ | async "
        (toggle)="onToggle($event)">Listened
        </songs-list>
         </div>
    `
})

export class SongsListenedComponent implements OnInit {
    listened$ : Observable<any>
    constructor(private store:Store,
                private songsService:SongsService) {
        
    }

    onToggle(event) {
        this.songsService.toggle(event)
    }

    ngOnInit(): void {
        this.listened$ = this.store.select('playlist')
        .filter(Boolean)
        .map(playlist => playlist.filter(track => track.listened));
         
    }
}