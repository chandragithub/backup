import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AngularFeedMainHomeComponent } from '../common/home/home.component';
import { HomeComponent } from '../angular/home/home.component';
import { ArticleTemplateComponent } from '../angular/article-template/article-template.component';
import { TutorialHomeComponent } from '../tutorials/tutorial-home/tutorial-home.component';
 
const routes: Routes = [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: AngularFeedMainHomeComponent},
      { path: 'articles', component: HomeComponent },
      { path: 'articles/:id', component: ArticleTemplateComponent,
        children: [
          { path: '', component: ArticleTemplateComponent},
          { path: 'angular_application_with_cli', component: ArticleTemplateComponent}
        ]
      },
      { path: 'tutorials', component: TutorialHomeComponent},
      { path: '**', component: HomeComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RouteModule { }