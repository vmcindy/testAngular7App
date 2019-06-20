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

  users: object;
  selectedUser: User;
  hookLog: string[];
  private logger: LoggerService;
  showPage: boolean;

  constructor(private dataService: DataService,logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  ngOnInit() {
    this.showPage =  true;
    this.dataService.getUsers().subscribe(dataObj => {
      this.users = dataObj;
    });
  }

  onSelect(user: User, event: any): void {
    this.selectedUser = user;
    // console.log('event', event);
  }

  onClose(): void {
    this.showPage = false;
    // console.log('event', event);
  }

}
