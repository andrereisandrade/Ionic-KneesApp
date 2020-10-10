import { EventsPage } from './../event/events.component';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  name;
  password;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login() {
    if (this.name == 'andre' && this.password == '123456') {
      this.navCtrl.push(EventsPage);
    }
  }

}
