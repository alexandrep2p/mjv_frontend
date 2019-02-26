import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ArtistComponent } from './page/artist/artist.component';
import { AlbumComponent } from './page/album/album.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home',component: HomeComponent},
  {path: 'artist/:id/:name', component: ArtistComponent},
  {path: 'album/:id/:name', component: AlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
