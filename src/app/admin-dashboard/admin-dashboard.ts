import { Component } from '@angular/core';
import { SIDEBAR } from "../side-bar/side-bar";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  imports: [SIDEBAR, CommonModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class ADMINDASHBOARD {

  totalUsers = 1245;
  pendingJobs = 38;
  totalRevenue = 12345;


  pendingApprovals = [{ name: 'Jane Smith', role: 'Tailor' }, { name: 'Mark Johnson', role: 'Plumber' }];


  approve(user: any) { console.log('approve', user); }
  reject(user: any) { console.log('reject', user); }
}
