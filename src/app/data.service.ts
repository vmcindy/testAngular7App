import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getPosts() {
    var posts = this.http.get('https://jsonplaceholder.typicode.com/posts');
    return posts;
  }

  getUsers() {
    var users = this.http.get('https://jsonplaceholder.typicode.com/users');
    return users;
  }

  getUser(id) {
    var user =  this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
    return user;
  }

}
