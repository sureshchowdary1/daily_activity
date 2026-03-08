import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Home {

  private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`/api/hello`);
  }
}
