import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TrangChuComponent} from './Components/TrangChu/trangchu.component';
import {GioiThieuComponent} from './Components/Gthieu/gioithieu.component';
import {LienHeComponent} from './lien-he/lien-he.component';
import { MyComponent } from './my/my.component';


@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent,
    GioiThieuComponent,
    LienHeComponent,
    MyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
