import { Component, ViewChild, OnInit, inject } from '@angular/core';
import { CUSTOMER_SIDEBAR } from "../side-bar/customer-side-bar";
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface JwtPayload {
  user_id: Number,
  email: String,
  first_name: String,
  role: String,
  iat: Number,
  exp: Number,
}

@Component({
  selector: 'app-client-dashboard',
  imports: [CUSTOMER_SIDEBAR, CommonModule],
  templateUrl: './client-dashboard.html',
  styleUrl: './client-dashboard.css'
})
export class CLIENTDASHBOARD {
  user: any = "";
  payload: any = '';
  private _http = inject(HttpClient)
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
    this._http.post('http://localhost/Hirein/auth/logout', { customer_id: this.payload.user_id })
      .subscribe(response => {
        //route the user to the homepage
        this._router.navigate(['/'])
      })

  }


  @ViewChild(CUSTOMER_SIDEBAR) sidebar!: CUSTOMER_SIDEBAR;

  activeProjects = [
    { title: 'Kitchen Sink Repair', subtitle: 'Plumbing', status: 'In Progress' },
    { title: 'Wedding Dress Alterations', subtitle: 'Tailoring', status: 'Pending Payment' }
  ];

  favoriteArtisans = [
    { name: 'John Doe', role: 'Plumber', rating: 5, avatar: '/assets/avatar-placeholder.png' },
    { name: 'Corim Iteler', role: 'Electrician', rating: 4, avatar: '/assets/avatar-placeholder.png' },
    { name: 'Cnantales', role: 'Carpenter', rating: 5, avatar: '/assets/avatar-placeholder.png' },
    { name: 'Jane Smith', role: 'Tailor', rating: 4, avatar: '/assets/avatar-placeholder.png' },
    { name: 'Tallor', role: 'Painter', rating: 5, avatar: '/assets/avatar-placeholder.png' }
  ];

  toggleMenu() {
    this.sidebar.toggleSidebar();
  }

  getProjectIconClass(title: string): string {
    if (title.includes('Kitchen') || title.includes('Plumbing')) return 'icon-plumbing';
    if (title.includes('Wedding') || title.includes('Dress')) return 'icon-fashion';
    return 'icon-default';
  }

  getStatusClass(status: string): string {
    if (status === 'In Progress') return 'status-in-progress';
    if (status === 'Pending Payment') return 'status-pending';
    return 'status-default';
  }

  messageArtisan(project: any) { console.log('message artisan', project); }


}

