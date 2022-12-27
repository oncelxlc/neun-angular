import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeButtonModule } from 'ng-neun/button';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NeButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
