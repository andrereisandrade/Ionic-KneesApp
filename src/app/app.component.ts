import { Login } from './pages/login/login';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Paginas
import { EventsPage } from './pages/event/events.component';
import { EventDetailComponent } from './pages/event/detail/detail.component';
import { LocationComponent } from './pages/event/location/location';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any =  Login;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
