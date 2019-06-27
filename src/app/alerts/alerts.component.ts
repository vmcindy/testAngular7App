import { Component, EventEmitter, OnInit, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  alertResponse (boolRes) {
    // this.viewPopup.emit(false);
  }

}
