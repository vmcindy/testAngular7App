import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { User } from '../object-classes/user';

@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.scss']
})
export class AddressbookComponent implements OnInit {

  users: object;
  selectedUser: User;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(dataObj => {
      this.users = dataObj;
    });
  }

  onSelect(user: User): void {
    this.selectedUser = user;

    console.log('user', user);

  }

}
