import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtistComponent } from './page/artist/artist.component';
import { AlbumComponent } from './page/album/album.component';
import { MsToMinPipe } from './pipes/ms-to-min.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistComponent,
    AlbumComponent,
    MsToMinPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
