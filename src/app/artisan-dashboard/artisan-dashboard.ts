import { Component } from '@angular/core';
import { SIDEBAR } from "../side-bar/side-bar";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artisan-dashboard',
  imports: [SIDEBAR, CommonModule],
  templateUrl: './artisan-dashboard.html',
  styleUrl: './artisan-dashboard.css'
})
export class ARTISANDASHBOARD {

  rating = 4.8;
  reviews = 125;
  earnings = 8970;
  completedJobs = 45;


  newJobs = [
    { title: 'Alterations Needed', customer: 'Sarah K.', location: 'Downtown', budget: 50 },
    { title: 'Custom Dress Design', customer: 'Emily R.', location: 'West End', budget: 300 }
  ];


  activeProjects = [
    { client: 'John D.', title: 'Suit fitting & repair', status: 'In Progress' },
    { client: 'Rebecca', title: 'Custom hem', status: 'Payment Pending' }
  ];


  apply(job: any) { console.log('apply', job); }
  messageClient(project: any) { console.log('message client', project); }
  requestPayout(project: any) { console.log('request payout', project); }

}
