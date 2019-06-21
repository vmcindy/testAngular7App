import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getPosts() {
    var posts = this.http.get('http://localhost:3300/posts');
    return posts;
  }

  getUsers() {
    var users = this.http.get('http://localhost:3300/users');
    return users;
  }

  getUser(id) {
    var user =  this.http.get('http://localhost:3300/users/' + id);
    return user;
  }

}
