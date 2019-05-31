import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../object-classes/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  selectedUser: object;
  
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {

    // Checking if the call is from another component or a route 
    if(this.user) {
      this.selectedUser = this.user;
    } else {
      const id = this.route.snapshot.paramMap.get('id');
      this.dataService.getUser(id).subscribe(dataObj => {
        this.selectedUser = dataObj;
      });
    }
  }

}
