import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  deviceType = this.helperService.getDeviceFromUserAgent();
  menuOptions: any[] = this.helperService.config.footerMenuOptions;
  socialLinks: any[] = this.helperService.config.footerSocialLinks;

  constructor(
    private helperService: HelperService
  ) { }

  goTo(path: string) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.helperService.goTo(path);
  }

}
