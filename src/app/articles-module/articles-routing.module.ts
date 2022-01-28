import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  ArticlesListComponent } from './articles-list/articles-list.component';
//import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';


const routes: Routes = [
  {path: 'articles', component:ArticlesListComponent},
  {path: 'articles/:id', component:ArticleDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }