import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  deviceType = this.helperService.getDeviceFromUserAgent();
  officialInfo = this.helperService.officialInfo;

  // form fields
  fname = '';
  lname = '';
  phone = '';
  email = '';
  service = '';
  message = '';

  constructor(
    private helperService: HelperService
  ) { }

  handleSubmit() {
    const button = document.getElementById('submit-btn') as HTMLElement;
    if (button.classList.contains('loading') || button.classList.contains('success')) {
      return;
    }

    // Add loading state
    button.classList.add('loading');

    // Simulate API call (2 seconds)
    setTimeout(() => {
      button.classList.remove('loading');
      button.classList.add('success');

      // Reset after 2 seconds
      setTimeout(() => {
        button.classList.remove('success');
        console.log(this.fname, this.lname, this.email, this.phone, this.service, this.message);
      }, 2000);
    }, 2000);
  }

}
