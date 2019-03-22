import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  users: Object;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(dataObj => {
      this.users = dataObj;
      console.log('users', this.users);
    });
  }

  firstClick() {
    this.h1Style = !this.h1Style;
    this.dataService.firstClick();
  }

}
