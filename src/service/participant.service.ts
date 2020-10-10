import { AppSettings } from './../config/appSettings';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Rx"

@Injectable()
export class ParticipantService {
  URL_BASE = AppSettings.URL_BASE;

  constructor(private http: Http) {
  }

  getParticipants() {
    return this.http.get(this.URL_BASE + "/participante/lista")
      .map(res => res.json());
  }

  getParticipant(id) {
    return this.http.get(this.URL_BASE + "/participante/" + id)
      .map(res => res.json());
  }

  createParticpant(participant) {
    participant.sex = "M"
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let body = JSON.stringify(participant);
    return this.http.post(this.URL_BASE + "/participante", body).map((res: Response) => res.json());
  }

  updateParticpant(participant) {
    var id = participant.id;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let body = JSON.stringify(participant);
    return this.http.put(this.URL_BASE + "/participante", body).map((res: Response) => res.json());
  }

  deleteUser(id) {
    return this.http.delete(this.getUserUrl(id))
      .map(res => res.json());
  }

  private getUserUrl(id) {
    return this.URL_BASE + "/usuario/" + id;
  }
}
