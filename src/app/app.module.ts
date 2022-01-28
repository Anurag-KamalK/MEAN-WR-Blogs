import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccountModule } from './account-module/account.module';
import { AppRoutingModule } from './app-routing.module';
import { ArticlesModule } from './articles-module/articles.module';
import { StaticpagesModule } from './staticpages-module/staticpages.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header-component/header.component';
import { FooterComponent } from './footer-component/footer.component';
import { BannerComponent } from './banner-component/banner.component';
import { AccountService } from './account-module/account.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound-component/pagenotfound.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PagenotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    ArticlesModule,
    StaticpagesModule,
    AccountModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
    
  ],

  exports:[
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
