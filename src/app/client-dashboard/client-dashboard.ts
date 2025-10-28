import { Component } from '@angular/core';
import { SIDEBAR } from "../side-bar/side-bar";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-dashboard',
  imports: [SIDEBAR, CommonModule],
  templateUrl: './client-dashboard.html',
  styleUrl: './client-dashboard.css'
})
export class CLIENTDASHBOARD {

  activeProjects = [
    { title: 'Kitchen Sink Repair', subtitle: 'Mainen Sink Repair', status: 'In Progress' },
    { title: 'Wedding Dress Alterations', subtitle: 'Mainen Sinnk Repair', status: 'Pending Payment' }
  ];


  favorites = ['John Doe', 'Corim Iteler', 'Cnantales', 'Jane Smith', 'Tallor'];


  messageArtisan(project: any) { console.log('message artisan', project); }
}
