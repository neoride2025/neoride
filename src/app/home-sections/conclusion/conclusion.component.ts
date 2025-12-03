import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.scss']
})
export class ConclusionComponent {

  deviceType = this.helperServ.getDeviceFromUserAgent();

  constructor(
    private helperServ: HelperService
  ) { }
}
