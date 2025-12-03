import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {

  config = this.helperService.config;
  officialInfo = this.helperService.officialInfo;
  deviceType = this.helperService.getDeviceFromUserAgent();

  constructor(
    private helperService: HelperService
  ) { 
    console.log(this.deviceType)
  }

  // function to scroll to the particular section by id
  goToSection(sectionID: string) {
    console.log('section ID : ', sectionID)
    const element = document.getElementById(`${sectionID}`) as HTMLElement | null; // Replace 'your-section-id' with the actual ID of the section you want to scroll tosectionID);
    console.log('element : ', element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}
