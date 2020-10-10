import { LocationComponent } from './../location/location';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Event } from '../../models/events';

import { EventService } from '../../../../service/event.service';
import { AppSettings } from "../../../../config/appSettings";

@Component({
  selector: 'page-event-details',
  templateUrl: 'detail.component.html'
})
export class EventDetailComponent {

  event: Event;
  id: string;


  getEventDetail(id) {
    this.EventService.getEvent(id).subscribe(event => {
      this.event = event;
    });
  }

  location(id) {
    this.navCtrl.push(LocationComponent, { id });
  }

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private EventService: EventService) {
    this.id = navParams.get('id');
    this.getEventDetail(navParams.get('id'));
  }
}
