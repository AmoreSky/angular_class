import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-customer-side-bar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './customer-side-bar.html',
  styleUrl: './side-bar.css'
})
export class CUSTOMER_SIDEBAR {
  currentYear = new Date().getFullYear()
  userName = 'Customer';
  userRole = 'Member';

  isOpen = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '', routerLink: '/client-dashboard' },
    { id: 'find-services', label: 'Find Services', icon: '', routerLink: '/services' },
    { id: 'my-projects', label: 'My Projects', icon: '', routerLink: '/client-dashboard/projects' },
    { id: 'my-bookings', label: 'My Bookings', icon: '', routerLink: '/client-dashboard/bookings' },
    { id: 'favorites', label: 'Favorite Artisans', icon: '', routerLink: '/client-dashboard/favorites' },
    { id: 'messages', label: 'Messages', icon: '', routerLink: '/client-dashboard/messages' },
    { id: 'profile', label: 'My Profile', icon: '', routerLink: '/profile' },
    { id: 'settings', label: 'Settings', icon: '', routerLink: '/client-dashboard/settings' }
  ];
}
