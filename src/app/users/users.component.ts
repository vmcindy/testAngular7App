import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Object;
  photos: Object;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getUsers().subscribe(dataObj => {
      this.users = dataObj;
    });

    this.dataService.getPhotos().subscribe(dataObj => {
      this.photos = dataObj;
    });
  }

}
