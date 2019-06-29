import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { User } from '../object-classes/user';

import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.scss'],
  providers:  [ LoggerService ]
})
export class AddressbookComponent implements OnInit {
  private logger: LoggerService;
  users: object;
  selectedUser: User;
  hookLog: string[];
  showPage: boolean;
  showPopup: boolean;
  showAlert: boolean;

  constructor(private dataService: DataService,logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  ngOnInit() {
    this.showPage = false;
    this.showPopup = false;
    this.dataService.getUsers().subscribe(dataObj => {
      this.users = dataObj;
    });
  }

  // viewing the user info on page
  onSelect(user: User): void {
    event.stopPropagation();
    this.showPage =  true;
    this.showPopup = false;
    this.selectedUser = user;
  }

  // closing the on page user info section
  onClose(section: string): void {
    this.showPage = false;
  }

  // viewing user info on a popup 
  viewPopup(user: User, event: any): void {
    event.stopPropagation();
    this.showPopup = true;
    this.showPage = false;
    this.selectedUser = user;
  }

  // closing the popup 
  closePopup(viewPopup) { 
    this.showPopup = viewPopup;
  }

  // opening a alert for delete user confirmation
  deleteUserAlert(id: number, event: any) {
    this.showAlert = true;
    console.log('userId', 1);
  }

  // deleting user based on delete confirmation
  deleteUser(alertResponse) {
    this.showAlert = false;
    console.log('alertResponse', alertResponse);
  }
}
