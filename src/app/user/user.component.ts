import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() selectedUser: object;
  
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {

    // Checking if the call has a route parameter 
    if(this.route.snapshot.paramMap.get('id') ) {
      const id = this.route.snapshot.paramMap.get('id');
      this.dataService.getUser(id).subscribe(dataObj => {
        this.selectedUser = dataObj;
      });
    }
  }

}
