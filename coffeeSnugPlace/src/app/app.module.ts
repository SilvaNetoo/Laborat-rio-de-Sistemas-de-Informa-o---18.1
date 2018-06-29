import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.router';
import { HomeComponent } from './home/home.component';
import { LoginGarcomComponent } from './login-garcom/login-garcom.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginGarcomComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
