import { Injectable } from '@angular/core';
import { Config } from '../others/config';
import { Router } from '@angular/router';
import { OfficialInfo } from '../others/official-info';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  config = new Config();
  officialInfo = new OfficialInfo();  

  constructor(
    private router: Router,
  ) {
  }

  // custom function to navigate to any page by passing the path
  goTo(path: string, param1?: string, param2?: string, data?: any) {
    let routerArray: any = [];
    if (param2)
      routerArray = [path, param1, param2];
    else if (param1)
      routerArray = [path, param1];
    else
      routerArray = [path];
    this.router.navigate(routerArray, data);
  }

  // function to find the device type from user agent
  getDeviceFromUserAgent(): 'mobile' | 'tablet' | 'desktop' {
    const ua = navigator.userAgent.toLowerCase();
    const width = window.innerWidth;

    // --- Primary: User Agent detection ---
    const isMobileUA =
      /mobile|iphone|ipod|android.*mobile/.test(ua);

    const isTabletUA =
      /ipad|tablet|android(?!.*mobile)/.test(ua);

    if (isMobileUA) return 'mobile';
    if (isTabletUA) return 'tablet';

    // --- Secondary: Width fallback ---
    if (width <= 768) return 'mobile';
    if (width <= 1024) return 'tablet';

    return 'desktop';
  }

  // function to block the scrolling
  toggleScroll(block: boolean) {
    document.body.style.overflow = block ? 'hidden' : '';
  }

}
