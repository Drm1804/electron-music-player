import {Component, OnInit} from '@angular/core';
import {MusicService} from './music/shared/music.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title;
    position;
    elapsed;
    duration;
    paused = true;
    tracks: any[] = [];
    filteredTracks: any[] = [];
    backgroundStyle;

    constructor(private musicService: MusicService) {
    }

    handleRandom() {
        const randomTrack = this.musicService.randomTrack(this.tracks);
        this.musicService.play(randomTrack.stream_url);
        this.title = randomTrack.title;
        this.backgroundStyle = this.composeBackgroundStyle(randomTrack.artwork_url)
    }

    handleForward() {
        let elapsed =  this.musicService.audio.currentTime;
        const duration =  this.musicService.audio.duration;
        if(duration - elapsed >= 5) {
            this.musicService.audio.currentTime = elapsed + 5;
        }
    }

    handlePausePlay() {
        if(this.musicService.audio.paused){
            this.paused = true;
            this.musicService.audio.play();
        } else {
            this.paused = false;
            this.musicService.audio.pause();
        }
    }

    handleStop() {
        this.musicService.audio.pause();
        this.musicService.audio.currentTime = 0;
        this.paused = false;
    }

    handleBackward() {
        let elapsed =  this.musicService.audio.currentTime;
        console.log(elapsed);
        if(elapsed >= 5) {
            this.musicService.audio.currentTime = elapsed - 5;
        }
    }

    handleQuery(payload) {
        this.musicService.findTracks(payload)
            .subscribe(tracks => {
                this.filteredTracks = tracks
            })
    }


    handleUpdate(track) {
        this.musicService.play(track.stream_url);
        this.title = track.title;
        this.backgroundStyle = this.composeBackgroundStyle(track.artwork_url);
    }

    handleEnded() {
        this.handleRandom();
    }

    composeBackgroundStyle(url) {
        return {
            width: '100%',
            height: '1000px',
            backgroundSize: 'cover',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),   url(${this.musicService.xlArtwork(url)})`
        }
    }

    handleTimeUpdate(){
        const elapsed =  this.musicService.audio.currentTime;
        const duration =  this.musicService.audio.duration;
        this.position = elapsed / duration;
        this.elapsed = this.musicService.formatTime(elapsed);
        this.duration = this.musicService.formatTime(duration);
    }


    ngOnInit() {
        this.musicService.getPlaylistTracks().subscribe(tracks => {
            this.tracks = tracks;
            this.handleRandom();
        });

        // On song end
        this.musicService.audio.onended = this.handleEnded.bind(this);
        // On play time update
        this.musicService.audio.ontimeupdate = this.handleTimeUpdate.bind(this);
    }
}
