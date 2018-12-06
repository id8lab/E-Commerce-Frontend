// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CollapseNavbarComponent } from '../components/collapse-navbar/collapse-navbar.component';
import { NgModule } from '@angular/core';
import { ShoppingCartModule } from 'ng-shopping-cart';

@NgModule({
  declarations: [
    AppComponent,
    CollapseNavbarComponent
  ],
  imports: [
    BrowserModule,
    ShoppingCartModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
