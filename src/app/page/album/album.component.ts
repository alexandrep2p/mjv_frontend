import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  providers: [SpotifyService]
})
export class AlbumComponent implements OnInit {
  
  public name: string;
  public id: string;
  public albumTracksRes;

  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.name = params.get("name");
    });

    this.spotifyService.getAlbumTracks(this.id)
      .subscribe((data:any) => {
        this.albumTracksRes = data.items;
        console.log(this.albumTracksRes)
      });
  }

  playPreview(musicPreview:string){
    let audio = new Audio();
    audio.src = musicPreview;
    audio.load();
    audio.play();
  }

}
