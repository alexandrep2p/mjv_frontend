import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class SpotifyService {

    private token = "BQA0GszIZn9dJc6zhSpi47w9OkQpo83edkjhFwdp6yFrSZ5X-m2HGb4c7lFmT6pZbuj5MygKmzN6q4DejctIOv2T0TjSzd3MrtKSweshNKC1V27vhLa8UZir45Btzux3A78YHLiwMhhAyzFmvWYPb2qxf7rOdynOGcx8fg";

    constructor(private httpClient: HttpClient) { }

    searchArtists(artistName: string) {
        let headerOptions: HttpHeaders = new HttpHeaders();
        headerOptions = headerOptions.append('Authorization', 'Bearer ' + this.token);
        return this.httpClient.get("https://api.spotify.com/v1/search?query=" + artistName + "&type=artist", { headers: headerOptions, responseType: "json" });
    }

    searchAlbums(albumName: string) {
        let headerOptions: HttpHeaders = new HttpHeaders();
        headerOptions = headerOptions.append('Authorization', 'Bearer ' + this.token);
        return this.httpClient.get("https://api.spotify.com/v1/search?query=" + albumName + "&type=album", { headers: headerOptions, responseType: "json" });
    }

    searchTracks(trackName: string) {
        let headerOptions: HttpHeaders = new HttpHeaders();
        headerOptions = headerOptions.append('Authorization', 'Bearer ' + this.token);
        return this.httpClient.get("https://api.spotify.com/v1/search?query=" + trackName + "&type=track", { headers: headerOptions, responseType: "json" });
    }

    getArtistAlbums(artistId: string) {
        let headerOptions: HttpHeaders = new HttpHeaders();
        headerOptions = headerOptions.append('Authorization', 'Bearer ' + this.token);
        return this.httpClient.get("https://api.spotify.com/v1/artists/" + artistId + "/albums?limit=5", { headers: headerOptions, responseType: "json" });
    }

    getAlbumTracks(albumId: string) {
        let headerOptions: HttpHeaders = new HttpHeaders();
        headerOptions = headerOptions.append('Authorization', 'Bearer ' + this.token);
        return this.httpClient.get("https://api.spotify.com/v1/albums/" + albumId + "/tracks", { headers: headerOptions, responseType: "json" });
    }

}