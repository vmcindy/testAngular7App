import { Component, OnInit } from '@angular/core';
import { USERS } from '../userMockData';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  name: string = 'John';
  users = USERS;

  constructor() { }

  ngOnInit() {
  }

}
