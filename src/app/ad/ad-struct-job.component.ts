import { Component, Input } from '@angular/core';

import { AdComponent }      from './ad.component';

@Component({
    template: `
        <div class="ad-job">
            <h5>{{data.headline}}</h5>
            <p>{{data.body}}</p>
        </div>
    `,
    styles: ['.ad-job { border: 1px solid gray; padding: 10px; border-radius: 10px; background-color: lightgreen; color: black;}']
})
export class AdJobComponent implements AdComponent {
    @Input() data: any;
}
