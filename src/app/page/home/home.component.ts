import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [SpotifyService],
})
export class HomeComponent implements OnInit {

  public artistRes;
  public albumRes; 
  public trackRes;

  constructor(
    private httpClient: HttpClient,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
  }

  searchArtist(artistName) {
    this.albumRes = null;
    this.trackRes = null;
    this.spotifyService.searchArtists(artistName)
      .subscribe(res => {
        this.artistRes = res.artists.items;
        console.log(this.artistRes);
      });
  }

  searchAlbum(albumName) {
    this.artistRes=null;
    this.trackRes = null;
    this.spotifyService.searchAlbums(albumName)
      .subscribe(res => {
        this.albumRes = res.albums.items;
        console.log(this.albumRes);
      });
  }

  searchTrack(trackName) {
    this.albumRes = null;
    this.artistRes=null;
    this.spotifyService.searchTracks(trackName)
      .subscribe(res => {
        this.trackRes = res.tracks.items;
        console.log(this.trackRes);
      });
  }

}
