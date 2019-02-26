import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  providers: [SpotifyService]
})
export class ArtistComponent implements OnInit {

  public name: string;
  public id: string;
  public artistAlbumsRes;

  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.name = params.get("name");
    });
    console.log(this.id)

    this.spotifyService.getArtistAlbums(this.id)
      .subscribe(data => {
        this.artistAlbumsRes = data.items;
        console.log(this.artistAlbumsRes)
      });
  }

}
