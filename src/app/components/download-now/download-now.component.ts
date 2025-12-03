import { Component } from '@angular/core';

@Component({
  selector: 'app-download-now',
  templateUrl: './download-now.component.html',
  styleUrls: ['./download-now.component.scss']
})
export class DownloadNowComponent {



  constructor() { }

  openPopup() {
    const overlay = document.getElementById('overlay') as HTMLElement;
    overlay.classList.add('active');
  }

  closePopup(event: any) {
    const overlay = document.getElementById('overlay') as HTMLElement;
    if (!event || event.target === document.getElementById('overlay')) {
      overlay.classList.remove('active');
      setTimeout(() => {
        this.goBack();
      }, 300);
    }
  }

  selectStore(store: string) {
    document.querySelectorAll('.store-btn').forEach(btn => {
      btn.classList.remove('selected');
    });
    // event.target.closest('.store-btn').classList.add('selected');

    setTimeout(() => {
      this.showQR(store);
    }, 200);
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

    const qrElement = document.getElementById('qrCode') as HTMLElement;
    qrElement.innerHTML = '';


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
