import { Component, Input }  from '@angular/core';

import { AdComponent }       from './ad.component';

@Component({
  template: `
    <div class="ad-profile">
      <h5>{{data.name}}</h5>
      <p>{{data.bio}}</p>
      <strong>Check it out today!</strong>
    </div>
  `,
  styles: ['.ad-profile { border: 1px solid gray; padding: 10px; border-radius: 10px; background-color: lightblue; color: black;}']
})
export class AdProfileComponent implements AdComponent {
  @Input() data: any;
}