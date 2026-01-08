import { Component, ViewChild, inject, OnInit } from '@angular/core';
import { ARTISAN_SIDEBAR } from "../side-bar/artisan-side-bar";
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface JwtPayload {
  artisan_id: Number,
  email: String,
  first_name: String,
  role: String,
  iat: Number,
  exp: Number,
}

@Component({
  selector: 'app-artisan-dashboard',
  imports: [CommonModule, ARTISAN_SIDEBAR,],
  templateUrl: './artisan-dashboard.html',
  styleUrl: './artisan-dashboard.css'
})
export class ARTISANDASHBOARD implements OnInit {
  user: any = "";
  payload: any = '';
  private _http = inject(HttpClient);
  private _router = inject(Router);

  ngOnInit(): void {
    const token = localStorage['token'];
    if (token) {
      this.payload = jwtDecode<JwtPayload>(token);
      this.user = this.payload.first_name
    ;
      console.log(this.payload.user_id);

    }
  }

  logout() {
    localStorage.removeItem('token');
    this._http.post('http://localhost/Hirein/artisanAuth/logout', { artisan_id: this.payload.artisan_id })
      .subscribe(response => {
        //route the user to the homepage
        this._router.navigate(['/'])
      })
  }

  @ViewChild(ARTISAN_SIDEBAR) sidebar!: ARTISAN_SIDEBAR;

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

  toggleMenu() {
    this.sidebar.toggleSidebar();
  }

  apply(job: any) { console.log('apply', job); }
  messageClient(project: any) { console.log('message client', project); }
  requestPayout(project: any) { console.log('request payout', project); }
}
