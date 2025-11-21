import { Component, ViewChild, OnInit, inject} from '@angular/core';
import { SIDEBAR, NavItem } from "../side-bar/side-bar";
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface JwtPayload {
  user_id:Number,
  email:String,
  first_name:String,
  role:String,
  iat:Number,
  exp:Number,
}

@Component({
  selector: 'app-client-dashboard',
  imports: [SIDEBAR, CommonModule],
  templateUrl: './client-dashboard.html',
  styleUrl: './client-dashboard.css'
})
export class CLIENTDASHBOARD {
  user:any = "";
  payload:any = '';
  private _http = inject(HttpClient)
  private _router = inject(Router);

  ngOnInit(): void{
    const token = localStorage['token'];
    if(token){
      this.payload = jwtDecode<JwtPayload>(token);
      this.user = this.payload.first_name;
      console.log(this.payload.user_id);
      
    }
  }
  logout(){
    localStorage.removeItem('token');
    this._http.post('http://localhost/Hirein/auth/logout', {customer_id: this.payload.user_id})
    .subscribe(response => {
      //route the user to the homepage
      this._router.navigate(['/'])
    })
  
  }
  
  @ViewChild(SIDEBAR) sidebar!: SIDEBAR;

  clientNavItems: NavItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: '<svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/></svg>',
      routerLink: '#'
    },
    {
      id: 'find-services',
      label: 'Find Services',
      icon: '<svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>',
      routerLink: '#'
    },
    {
      id: 'my-projects',
      label: 'My Projects',
      icon: '<svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/></svg>',
      routerLink: '#'
    },
    {
      id: 'my-bookings',
      label: 'My Bookings',
      icon: '<svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/></svg>',
      routerLink: '#'
    },
    {
      id: 'favorites',
      label: 'Favorite Artisans',
      icon: '<svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg>',
      routerLink: '#'

    },
    {
      id: 'messages',
      label: 'Messages',
      icon: '<svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/></svg>',
      routerLink: '#'
    },
    {
      id: 'profile',
      label: 'My Profile',
      icon: '<svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/></svg>',
      routerLink: '#'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: '<svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"/></svg>',
      routerLink: '#'
    }
  ];

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

