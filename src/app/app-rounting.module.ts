import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultArtistComponent } from './pages/result-artist/result-artist.component';
import { ResultAlbumComponent } from './pages/result-album/result-album.component';
import { ResultTrackComponent } from './pages/result-track/result-track.component';
import { ResultNotFoundComponent } from './pages/result-not-found/result-not-found.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'artist', component: ResultArtistComponent},
  { path: 'album', component: ResultAlbumComponent},
  { path: 'track', component: ResultTrackComponent},
  { path: 'not-found', component: ResultNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRountingModule { }
export const routingComponents = [
  HomeComponent,
  ResultArtistComponent,
  ResultAlbumComponent,
  ResultTrackComponent,
  ResultNotFoundComponent
]

