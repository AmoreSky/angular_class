import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ADMIN_SIDEBAR } from '../side-bar/admin-side-bar';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  user_id: Number,
  email: String,
  first_name: String,
  role: String,
  iat: Number,
  exp: Number,
}


@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule, ADMIN_SIDEBAR],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class ADMINDASHBOARD implements OnInit {
  user: any = "";
  payload: any = '';
  private _http = inject(HttpClient);
  private _router = inject(Router);

  ngOnInit(): void {
    const token = localStorage['token'];
    if (token) {
      this.payload = jwtDecode<JwtPayload>(token);
      this.user = this.payload.first_name;
      console.log(this.payload.user_id);

    }
  }

  logout() {
    localStorage.removeItem('token');
    this._http.post('http://localhost/Hirein/adminAuth/logout', { admin_id: this.payload.user_id })
      .subscribe(response => {
        //route the user to the homepage
        this._router.navigate(['/'])
      })
  }

  @ViewChild(ADMIN_SIDEBAR) sidebar!: ADMIN_SIDEBAR;

  totalUsers = 1245;
  pendingJobs = 38;
  totalRevenue = 12345;

  pendingApprovals = [
    { name: 'Jane Smith (Tailor)', role: 'Tailor', avatar: '/assets/avatar-placeholder.png' },
    { name: 'Mark Johnson', role: 'Plumber', avatar: '/assets/avatar-placeholder.png' }
  ];

  recentlyJoined = [
    { name: 'Spolere', avatar: '/assets/avatar-placeholder.png' },
    { name: 'Fjones', avatar: '/assets/avatar-placeholder.png' },
    { name: 'Copamms', avatar: '/assets/avatar-placeholder.png' },
    { name: 'New Uses', avatar: '/assets/avatar-placeholder.png' }
  ];

  recentDispute = {
    name: 'New Fccab li...',
    type: 'open-edit',
    avatar: '/assets/avatar-placeholder.png'
  };

  toggleMenu() {
    if (this.sidebar && (this.sidebar as any).toggleSidebar) {
      (this.sidebar as any).toggleSidebar();
    }
  }

  approve(user: any) { console.log('approve', user); }
  reject(user: any) { console.log('reject', user); }
}


