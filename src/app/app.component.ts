import { Component } from '@angular/core';
import { MusicService } from './music/shared/music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tracks: any[] = [];
  filteredTracks: any[] = [];

  constructor(
      private musicService: MusicService
  ){}

  handleQuery(payload){
    this.musicService.findTracks(payload)
        .subscribe(tracks => {
          this.filteredTracks = tracks
        })
  }


  handleUpdate(track){
    console.log(track);
  }
}
