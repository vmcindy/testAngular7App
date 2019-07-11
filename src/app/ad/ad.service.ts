import { Injectable } from '@angular/core';

import { AdJobComponent } from './ad-struct-job.component';
import { AdProfileComponent } from './ad-struct-profile.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(AdProfileComponent, {name: 'Apigee management', bio: 'Design, secure, analyze, and scale APIs anywhere with visibility and control.'}),
      new AdItem(AdJobComponent, {headline: 'Apple - Hiring for several positions', body: 'Submit your resume today!'}),
      new AdItem(AdProfileComponent, {name: 'Amazon Web Services', bio: 'Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services. Free to join, pay only for what you use.'}),
      new AdItem(AdJobComponent, {headline: 'Google - Openings in all departments', body: 'Apply today'}),
    ];
  }
}