import { Component, OnInit, Input } from '@angular/core';
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

  onSelect(user: User): void {
    event.stopPropagation();
    this.showPage =  true;
    this.showPopup = false;
    this.selectedUser = user;
  }

  onClose(section: string): void {
    this.showPage = false;
  }

  popupView(user: User, event: any): void {
    event.stopPropagation();
    this.showPopup = true;
    this.showPage = false;
    this.selectedUser = user;
  }

  closePopup(viewPopup) { 
    this.showPopup = viewPopup;
  }
}
