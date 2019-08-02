import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Store } from "../../store";

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import { Observable } from "rxjs/Observable";
import { SourceMapGenerator } from "@angular/compiler/src/output/source_map";

export interface Song { 
    id:number, 
    name:string, 
    listened:boolean, 
    favourite:boolean
}

@Injectable() 

export class SongsService {

    getPlaylist$: Observable<Song[]> = this.http
        .get('/api/playlist')
        .map(res => res.json())
        .do(next => this.store.set('playlist', next))

    constructor(
        private http:Http, 
        private store:Store) {}

        toggle(event:any) {
            this.http
                .put(`/api/playlist/${event.track.id}`, event.track)
                .map(res => res.json())
                .subscribe((track:Song) => {
                    const value = this.store.value.playlist; 
                    
                    const playlist = value.map((song:Song) => {
                        if (event.track.id === song.id) {
                            return { ...song, ...event.track}
                        } else {
                            song;
                        }
                    }); 

                    this.store.set('playlist', playlist)
                })
        }
}

