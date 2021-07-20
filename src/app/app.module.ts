import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePgComponent } from './views/home-pg/home-pg.component';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';

import { ProxyHttpService } from './services/proxy-http.service';
import { CardComponent } from './sharedComponents/card/card.component';
import { ButtonComponent } from './sharedComponents/button/button.component';
import { AboutComponent } from './views/about/about.component';
import { QuizPgComponent } from './views/home-pg/quiz-pg/quiz-pg.component';
import { FormComponent } from './sharedComponents/form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePgComponent,
    NavBarComponent,
    CardComponent,
    ButtonComponent,
    AboutComponent,
    QuizPgComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [ProxyHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
