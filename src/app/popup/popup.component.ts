import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() user: object;
  @Output() viewPopup = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

  closePopup () {
    this.viewPopup.emit(false);
  }

}
