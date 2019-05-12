import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ScrollingModule } from '@angular/cdk/scrolling'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { FlickrService } from './home/home.service'
import { TruncatePipe } from './home/truncate.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FlickrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
