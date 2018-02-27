import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

import { AppComponent } from './app.component';
import { ItemsModule } from './items/items.module';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    SharedModule,
    CoreModule,
    HomeModule,
    ItemsModule,
    AppRoutingModule,
    PageNotFoundModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    if (!environment.production) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
  }
}

