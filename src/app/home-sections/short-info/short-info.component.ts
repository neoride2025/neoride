import { Component } from '@angular/core';

@Component({
  selector: 'app-short-info',
  templateUrl: './short-info.component.html',
  styleUrls: ['./short-info.component.scss']
})
export class ShortInfoComponent {

  infoStates: any[] = [
    {
      number: '2M+',
      label: 'Active Users'
    },
    {
      number: '₹50Cr+',
      label: 'Saved Together'
    },
    {
      number: '4.8★',
      label: 'User Rating'
    }
  ]
}
