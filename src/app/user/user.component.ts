import { Component, OnInit, Input, OnChanges,   
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnDestroy,
  SimpleChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { DataService } from '../data.service';
import { LoggerService }    from '../logger.service';

import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnChanges {

  @Input() user: object;
  values = '';
  
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private logger: LoggerService
  ) { }

  ngOnInit() {

    console.log('OnInit' );
    
    // Checking if the call has a route parameter 
    if(this.route.snapshot.paramMap.get('id') ) {
      const id = this.route.snapshot.paramMap.get('id');
      this.getUser(id).subscribe(dataObj => {
        this.user = dataObj;
      });
    }
  }

  getUser(id) {
    var user =  this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
    return user;
  }

  onKey(event: any) {
    this.values += event.target.value + ' | ';
  }

  logIt(msg: string) {
    this.logger.log(`${msg}`);
  }

  ngOnChanges() { this.logIt(`OnChanges`); }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() { this.logIt(`DoCheck`); }

  ngAfterContentInit() { this.logIt(`AfterContentInit`);  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() { this.logIt(`AfterContentChecked`); }

  ngAfterViewInit() { this.logIt(`AfterViewInit`); }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() { this.logIt(`AfterViewChecked`); }

  ngOnDestroy() { this.logIt(`OnDestroy`); }



}
