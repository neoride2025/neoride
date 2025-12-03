import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {

  myTeamMembers: any[] = [
    { name: 'John Doe', designation: 'CEO', image: '35' },
    { name: 'Jane Smith', designation: 'CTO', image: '22' },
    { name: 'Michael Chen', designation: 'Lead Technician', image: '10' },
    { name: 'Emily Johnson', designation: 'Product Manager', image: '20' }
  ]
}
