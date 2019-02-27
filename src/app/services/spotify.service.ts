import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class SpotifyService {

    private token = "BQCcDBdCuMJPkhoT1jtSeX0cJKw4_5bHmR4RhygwQUiTVwopevzTofIFtHiVm1JVDgV-NaAiO9Rx14gKUZhz-km2wMfHXEc9veQriAzXQjn6vRITSjJYHQfy1v7WqDGLAEGuI1dBUUskF10ecGAxWmqrYunUkYPz_89eAQ";

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