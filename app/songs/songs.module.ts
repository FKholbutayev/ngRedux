import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'
import { SongsFavouriteComponent } from './components/songs-favourites/songs-favourites.component';
import { SongsListenedComponent } from './components/songs-listened/songs-listened.component';
import { SongsPlaylistComponent } from './components/songs-playlist/songs-playlist.component';
import { SongsService } from './services/songs.service'
import { SongsListComponent } from './components/song-list/song-list.component';

@NgModule({
    imports: [
        CommonModule, 
        HttpModule
    ], 
    declarations: [
        SongsFavouriteComponent, 
        SongsListenedComponent, 
        SongsPlaylistComponent, 
        SongsListComponent
    ],
    providers:[
        SongsService
    ], 
    exports: [
        SongsFavouriteComponent, 
        SongsListenedComponent, 
        SongsPlaylistComponent
    ]
})

export class SongsModule {

}