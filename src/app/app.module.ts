import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { PrismModule } from '@ngx-prism/core';
import { DisqusModule } from "ngx-disqus";

import { RouteModule } from './route/route.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AngularFeedMainHomeComponent } from './common/home/home.component';
import { HomeComponent } from './angular/home/home.component';
import { ArticleFilterPipe } from './pipes/article-filter.pipe';
import { ArticleTemplateComponent } from './angular/article-template/article-template.component';
import { TutorialHomeComponent } from './tutorials/tutorial-home/tutorial-home.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArticleFilterPipe,
    ArticleTemplateComponent,
    AngularFeedMainHomeComponent,
    TutorialHomeComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    RouteModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    PrismModule,
    DisqusModule.forRoot('disqus_shortname')
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
