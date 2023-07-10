import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiur="https://64a7757c096b3f0fcc8151eb.mockapi.io/"
  constructor( private http: HttpClient) { }
  getdata() {
    return this.http.get(this.apiur+"info")
  }

}
