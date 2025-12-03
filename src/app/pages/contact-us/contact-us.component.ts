import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  deviceType = this.helperService.getDeviceFromUserAgent();

  constructor(
    private helperService: HelperService
  ) { }
}
