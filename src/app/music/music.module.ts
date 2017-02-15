import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";
import {CommonModule} from '@angular/common';

import {AutoCompleteModule} from 'primeng/primeng';
import {MusicSearchComponent} from './music-search/music-search.component';

import {ApiService} from './shared/api.service'
import {MusicService} from './shared/music.service';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicPlayerComponent } from './music-player/music-player.component'

@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        AutoCompleteModule,
        CommonModule
    ],
    exports: [
        MusicSearchComponent,
        MusicDetailsComponent,
        MusicPlayerComponent
    ],
    declarations: [
        MusicSearchComponent,
        MusicDetailsComponent,
        MusicPlayerComponent
    ],
    providers: [
        ApiService,
        MusicService
    ]
})
export class MusicModule {
}
