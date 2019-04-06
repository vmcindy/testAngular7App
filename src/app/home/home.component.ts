import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  posts: Object;
  users: Object;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getPosts().subscribe(dataObj => {
      this.posts = dataObj;
      // console.log('posts', this.posts);
    });

    this.dataService.getUsers().subscribe(dataObj => {
      this.users = dataObj;
      // console.log('users', this.users);
    });

  }

}
