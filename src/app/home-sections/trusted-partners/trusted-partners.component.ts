import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-trusted-partners',
  templateUrl: './trusted-partners.component.html',
  styleUrls: ['./trusted-partners.component.scss']
})
export class TrustedPartnersComponent {

  deviceType = this.helperService.getDeviceFromUserAgent();

  constructor(
    private helperService: HelperService
  ) { }

  ngOnInit() {
    const style = document.createElement('style');
    style.textContent = `
    @keyframes moveFlip {
      0% { transform: translateX(-50px) rotateY(0deg); }
      45% { transform: translateX(calc(${this.deviceType === 'desktop' ? '50vw' : '100vw'} + 50px)) rotateY(0deg); }
      50% { transform: translateX(calc(${this.deviceType === 'desktop' ? '50vw' : '100vw'} + 50px)) rotateY(180deg); }
      95% { transform: translateX(-50px) rotateY(180deg); }
      100% { transform: translateX(-50px) rotateY(360deg); }
    }

    .motor-bike {
      animation: moveFlip ${this.deviceType === 'desktop' ? '10s' : this.deviceType === 'tablet' ? '8s' : '5s'} linear infinite;
    }
  `;
    document.head.appendChild(style);
  }
}
