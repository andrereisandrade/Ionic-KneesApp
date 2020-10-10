import { LocationComponent } from './location/location';
import { AppSettings } from './../../../config/appSettings';
import { LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Event } from '../../models/event';
import { EventService } from '../../../service/event.service';

import { EventDetailComponent } from './detail/detail.component';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'page-events',
  templateUrl: 'events.component.html'
})

export class EventsPage {
  events: Event[]
  originalEvents: Event[];
  searchenable = false;

  private filter = AppSettings.FILTER + 'endereco:Santa Rita';

  constructor(
    public loading: LoadingController,
    public navCtrl: NavController,
    private EventService: EventService) {
    this.getEvents();
  }
  activateSearch() {
    this.searchenable = true;
  }
  getEvents() {
    let loader = this.loading.create({
      content: 'Getting latest entries...',
    });

    loader.present().then(() => {
      this.EventService.getEvents(this.filter).subscribe(
        events => {
          this.events = events;
          this.originalEvents = events;
        });

      loader.dismiss();
    });
  }

  goToDetails(id: string) {
    this.navCtrl.push(EventDetailComponent, { id });
  }


  location(id: string) {
    this.navCtrl.push(LocationComponent, { id });
  }
  onCancel() {
    console.log('caasdfasfasiu')
    this.searchenable = false;
  }
  search(searchEvent) {
    let term = searchEvent.target.value
    if (term.trim() === '' || term.trim().length < 5) {
      this.events = this.originalEvents;
    } else {
      this.EventService.searchUsers(term)
        .subscribe(event => {
          console.log(event)
          this.events = event
        });
    }
  }

  // ionViewLoaded() {
  //   let loader = this.loading.create({
  //     content: 'Getting latest entries...',
  //   });

  //   loader.present().then(() => {

  //     loader.dismiss();
  //   });

}
