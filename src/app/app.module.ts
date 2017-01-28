import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { SaucersComponent } from './saucers/saucers.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    RestaurantComponent,
    SaucersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
