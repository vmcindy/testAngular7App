import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})

export class DataService {

  apiUrl: string = 'http://localhost:3300/';

  constructor(private http: HttpClient) { }

  getPosts() {
    var posts = this.http.get(this.apiUrl + 'posts');
    return posts;
  }

  getUsers() {
    var users = this.http.get(this.apiUrl + 'users');
    var photos = this.http.get(this.apiUrl + 'photos');
    return users;
  }

  getUser(id) {
    var user =  this.http.get(this.apiUrl + 'users/' + id);
    return user;
  }

  getPhotos() {
    var photos = this.http.get(this.apiUrl + 'photos');
    return photos;
  }
}
