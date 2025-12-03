import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {

  deviceType = this.helperService.getDeviceFromUserAgent();

  constructor(
    private helperService: HelperService
  ) { }

}
