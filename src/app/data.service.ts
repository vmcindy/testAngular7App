import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  // url: string = 'https://jsonplaceholder.typicode.com/';
  url: string = 'http://localhost:3300/'; //
  // make sure to install CORS plugin on browser

  constructor(private http: HttpClient) { }

  getPosts() {
    var posts = this.http.get(this.url + 'posts');
    return posts;
  }

  getUsers() {
    var users = this.http.get(this.url + 'users');
    var photos = this.http.get(this.url + 'photos');
    return users;
  }

  getUser(id) {
    var user =  this.http.get(this.url + 'users/' + id);
    return user;
  }

  deleteUser(id) {
    var user =  this.http.get(this.url + 'users/' + id);
    return user;
  }

  getPhotos() {
    var photos = this.http.get(this.url + 'photos');
    return photos;
  }
}
