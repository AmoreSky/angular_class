import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-admin-side-bar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './admin-side-bar.html',
  styleUrl: './side-bar.css'
})
export class ADMIN_SIDEBAR {
  currentYear = new Date().getFullYear()
  userName = 'Admin';
  userRole = 'Administrator';

  isOpen = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '', routerLink: '/admin-dashboard' },
    { id: 'add-admin', label: 'Add Admin', icon: '', routerLink: '/add-admin' },
    { id: 'manage', label: 'Manage Users', icon: '', routerLink: '/manage-users' },
    { id: 'reports', label: 'Reports', icon: '', routerLink: '/reports' }
  ];
}
