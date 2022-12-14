import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './features/heroes/hero-detail/hero-detail.component';
import { MessagesComponent } from './shared/messages/messages.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { HeroListComponent } from './features/heroes/hero-list/hero-list.component';
import { InMemoryDataService } from './core/services/in-memory-data.service';
import { HeroSearchComponent } from './features/heroes/hero-search/hero-search.component';
import { HeroFormComponent } from './features/heroes/hero-form/hero-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroListComponent,
    HeroSearchComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
