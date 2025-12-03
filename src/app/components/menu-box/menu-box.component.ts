import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-menu-box',
  templateUrl: './menu-box.component.html',
  styleUrls: ['./menu-box.component.scss'],
  animations: [
    trigger('backdrop', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('160ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('160ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('dialog', [
      transition(':enter', [
        style({ transform: 'translateY(12px) scale(.98)', opacity: 0 }),
        animate('220ms cubic-bezier(.2,.9,.2,1)', style({ transform: 'translateY(0) scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('180ms cubic-bezier(.4,.0,.2,1)', style({ transform: 'translateY(8px) scale(.98)', opacity: 0 }))
      ])
    ])
  ]
})
export class MenuBoxComponent {

  config = this.helperServ.config;

  @Output() close = new EventEmitter<void>();

  constructor(
    public helperServ: HelperService
  ) { }

  goTo(path: string) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.close.emit();
    this.helperServ.toggleScroll(false);
    this.helperServ.goTo(path);
  }

  // Clicking backdrop closes by default — change if you need to disable
  onBackdropClick() {
    this.close.emit();
    this.helperServ.toggleScroll(false);
  }

  onClose() {
    this.close.emit();
  }
}
