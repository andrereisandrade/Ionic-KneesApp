import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { AppSettings } from '../../../../config/appSettings';
import { EventService } from '../../../../service/event.service';

declare var google;

//@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationComponent {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = 'santa rita do sapucaí, mg';
  end = 'pouso alegre, mg';

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  imageURL = AppSettings.URL_BASE + "/resources/img/events";
  event: Event;
  id: string;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private EventService: EventService) {
    this.id = navParams.get('id');
    this.getEventDetail(navParams.get('id'));
    this.calculateAndDisplayRoute()
  }

  ionViewDidLoad() {
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: {
        lat: -22.260350, lng: -45.702513
      }
    });

    this.directionsDisplay.setMap(this.map);
  }

  getEventDetail(id) {
    this.EventService.getEvent(id).subscribe(event => {
      this.event = event;
    });
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }


}
