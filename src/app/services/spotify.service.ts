import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class SpotifyService {

    private token = "BQCvZEpvmmSjCjmbdhiOeZyI6Uk7RFCBTc9PIoDQm6zYoGvF9_6O3YgrnJ1HI-oFlo0OgHHipAF55JUMxjB1Lhx5Hj2MnKFBv8lpzmqGiXNyWiuSafayat8qeqaLhEtmZnIvHE1OXU4qgFDw9lVUTxEQ3f5goWaJvTNz_g";

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