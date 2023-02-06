import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocHeaderModule } from './doc-common/doc-header/doc-header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DocHeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
