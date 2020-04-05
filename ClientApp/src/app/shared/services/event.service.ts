import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Event } from '../models/event';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  getAllEvent(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(environment.api_url + 'events');
  }

  addEvent(event: Event): Observable<Event> {
    return this.httpClient.post<Event>(environment.api_url + 'events', event);
  }

  updateEvent(event: Event): Observable<Event> {
    return this.httpClient.put<Event>(environment.api_url + 'events/' + event.eventId, event);
  }

  removeEvent(event: Event): Observable<Event> {
    return this.httpClient.delete<Event>(environment.api_url + 'events/' + event.eventId);
  }

  removeUserFromEvent(event: Event, user: User): Observable<any> {
    return this.httpClient.delete<any>(environment.api_url + 'events/' + event.eventId + '/' + user.userId);
  }

  getUsersByEvent(event: Event): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.api_url + 'events/' + event.eventId + '/users');
  }
}
