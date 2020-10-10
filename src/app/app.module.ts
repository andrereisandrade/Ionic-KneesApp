import { TabsPage } from './pages/tabs/tabs';
import { ContactPage } from './pages/contact/contact';
import { AboutPage } from './pages/about/about';
import { Signup } from './pages/signup/signup';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { EventsPage } from './pages/event/events.component';
import { EventDetailComponent } from './pages/event/detail/detail.component';


import { EventService } from '../service/event.service';
import { Login } from "./pages/login/login";
import { LocationComponent } from './pages/event/location/location';

@NgModule({
  declarations: [
    MyApp,
    Login,
    Signup,
    AboutPage,
    ContactPage,
    TabsPage,
    EventsPage,
    LocationComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Signup,
    AboutPage,
    ContactPage,
    TabsPage,
    EventsPage,
    LocationComponent,
    EventDetailComponent
  ],
  providers: [
    EventService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
