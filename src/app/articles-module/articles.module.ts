import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './articles-routing.module'
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { FeaturedArticlesComponent } from './featured-articles/featured-articles.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ArticlesListComponent, ArticleDetailsComponent, LatestArticlesComponent, FeaturedArticlesComponent, CategoriesComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports:[
    LatestArticlesComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ArticlesModule { }
