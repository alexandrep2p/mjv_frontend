import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class SpotifyService {

    private token = "TOKEN";

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