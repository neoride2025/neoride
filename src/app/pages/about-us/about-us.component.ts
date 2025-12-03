import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  deviceType = this.helperService.getDeviceFromUserAgent();

  constructor(
    private helperService: HelperService
  ) { }
}
