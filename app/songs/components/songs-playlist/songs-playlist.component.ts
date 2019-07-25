import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "../../../store";
import { SongsService } from "../../services/songs.service";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";



@Component({
    selector:'songs-playlist', 
    template: `
        <div class="songs"> 
            <div *ngFor = "let item of playlist$ | async">
                {{ item.artist }}
                {{ item.track }}
            </div>
        </div>
    `
})

export class SongsPlaylistComponent implements OnInit, OnDestroy {
    playlist$ : Observable<any[]>
    subscription : Subscription
    constructor(
        private store:Store, 
        private songsService:SongsService) {

    }
    
    ngOnInit(): void {
        this.playlist$ = this.store.select('playlist');
        this.subscription = this.songsService.getPlaylist$.subscribe();
        
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
}