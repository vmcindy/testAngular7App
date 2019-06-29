import { Component, EventEmitter, OnInit, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  // _message: string;
  // @Input() set message(message: string) {
  //   this._message = message;
  // }
  // get message(): string { return this._message; }

  @Input() message: string;
  @Output() alertResponse = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

  responseFunction (boolRes) {
    this.alertResponse.emit(boolRes);
  }

}
