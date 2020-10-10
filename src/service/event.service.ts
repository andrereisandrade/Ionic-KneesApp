import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Rx"
import { AppSettings } from "../config/appSettings";

@Injectable()
export class EventService {

  URL_EVENT = AppSettings.URL_BASE + "evento/";
  URL_SEARCH_EVENTS = this.URL_EVENT + "lista/?" + AppSettings.FILTER + "endereco"

  constructor(private http: Http) { }

  getEvents(filter) {
    return this.http.get(this.URL_EVENT + "lista/?" + filter)
      .map(res => res.json());
  }

  getEvent(id) {
    return this.http.get(this.URL_EVENT + id)
      .map(res => res.json());
  }

  searchUsers(searchParam: string) {
    var search = `${this.URL_SEARCH_EVENTS}:${searchParam}`;
    return this.http.get(search)
      .debounceTime(400)
      .distinctUntilChanged()
      .map(res => res.json());
  }
}
