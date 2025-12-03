import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-terms-service',
  templateUrl: './terms-service.component.html',
  styleUrls: ['./terms-service.component.scss']
})
export class TermsServiceComponent {
  
  config = this.helperService.config;
  officialInfo = this.helperService.officialInfo;
  deviceType = this.helperService.getDeviceFromUserAgent();

  constructor(
    private helperService: HelperService
  ) { }
}
