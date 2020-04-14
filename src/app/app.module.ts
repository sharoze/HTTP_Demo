import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
import { SimpleJSONServiceService } from './simple-jsonservice.service';
import { HttpClientModule }    from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [SimpleJSONServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
