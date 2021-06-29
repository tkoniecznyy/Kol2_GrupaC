import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { TKComponentComponent } from './tk-component/tk-component.component';

import {HttpClientModule} from "@angular/common/http";
import {TKServiceService} from './tk-service.service';
import { BlogComponent } from './components/blog/blog.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from 'src/app/app.component';
// @ts-ignore
@NgModule({
  declarations: [
    BlogComponent,
    BlogItemComponent,
    BlogItemImageComponent,
    AppComponent,
  ],
  imports: [
      HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TKServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

