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
    console.log("testing", this.API_URL);
    
    return this.http.get( `${this.API_URL}/api/hello`);
  }
}
