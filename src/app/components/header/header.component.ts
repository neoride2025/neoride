import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  config = this.helperService.config;
  menuItems = this.config.headerMenuOptions;
  scrollPosition = 0;
  deviceType = this.helperService.getDeviceFromUserAgent();
  show = false;

  constructor(
    public helperService: HelperService,
    private router: Router
  ) {
    console.log(this.router.url);
    this.getActiveMenuItem();

  }

  // function to find the active menu item and highlight it
  getActiveMenuItem() {
    // deactivate all menu item
    this.menuItems.forEach((menu: any) => {
      menu.active = false;
    })
    const activeMenuItem = this.menuItems.find((menu: any) => menu.path === this.router.url.split('/')[1]);
    if (activeMenuItem)
      activeMenuItem.active = true;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = window.scrollY;
  }

  goTo(path: string) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.helperService.goTo(path);
  }

  toggleMenu() {
    this.show = !this.show;
    this.helperService.toggleScroll(this.show);
  }

  onClose() {
    this.show = false;
  }

  // download now related

  openPopup() {
    const overlay = document.getElementById('overlay') as HTMLElement;
    overlay.classList.add('active');
    this.helperService.toggleScroll(true);
  }

  closePopup(event?: any) {
    const overlay = document.getElementById('overlay') as HTMLElement;
    if (!event || event.target === document.getElementById('overlay')) {
      overlay.classList.remove('active');
      this.helperService.toggleScroll(false);
      setTimeout(() => {
        this.goBack();
      }, 300);
    }
  }

  selectStore(store: string) {
    document.querySelectorAll('.store-btn').forEach(btn => {
      btn.classList.remove('selected');
    });
    this.showQR(store);
  }

  showQR(store: string) {
    const appUrls: any = {
      appstore: 'https://apps.apple.com/app/your-app-id',
      playstore: 'https://play.google.com/store/apps/details?id=com.yourapp'
    };


    const storeName = document.getElementById('storeName') as HTMLElement;
    const appUrl = document.getElementById('appUrl') as HTMLElement;

    const qrContainer = document.getElementById('qrContainer') as HTMLElement;
    const storeSelector = document.getElementById('storeSelection') as HTMLElement;
    storeSelector.style.display = 'none';
    qrContainer.classList.add('active');

    storeName.textContent = store === 'appstore' ? 'Apple App Store' : 'Google Play Store';
    appUrl.textContent = appUrls[store];
  }

  goBack() {
    const qrContainer = document.getElementById('qrContainer') as HTMLElement;
    const storeSelector = document.getElementById('storeSelection') as HTMLElement;
    qrContainer.classList.remove('active');
    storeSelector.style.display = 'flex';
    document.querySelectorAll('.store-btn').forEach(btn => {
      btn.classList.remove('selected');
    });
  }

}
