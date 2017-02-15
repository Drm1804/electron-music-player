import { Component, OnInit} from '@angular/core';
import { MusicService } from './music/shared/music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    title;
    position;
    elapsed;
    duration;
    paused = true;
    tracks: any[] = [];
    filteredTracks: any[] = [];
    backgroundStyle

  constructor(
      private musicService: MusicService
  ){}

  handleRandom(){
        console.log('handleRandom');
  }

  handleForward(){
        console.log('handleForward');
  }

  handlePausePlay(){
        console.log('handlePausePlay');
  }

  handleStop(){
        console.log('handleStop');
  }

  handleBackward(){
        console.log('handleBackward');
  }

  handleQuery(payload){
    this.musicService.findTracks(payload)
        .subscribe(tracks => {
          this.filteredTracks = tracks
        })
  }


  handleUpdate(track){
    console.log(track);
  }

  ngOnInit(){
    console.log('ngOnInit');
  }
}
