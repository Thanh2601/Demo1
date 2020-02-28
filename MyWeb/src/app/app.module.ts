import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TrangChuComponent} from './Components/TrangChu/trangchu.component';
import {GioiThieuComponent} from './Components/Gthieu/gioithieu.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent,
    GioiThieuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
