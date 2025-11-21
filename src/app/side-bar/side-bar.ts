import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  routerLink:any;
}

@Component({
  selector: 'app-side-bar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css'
})
export class SIDEBAR {
  @Input() userName = '';
  @Input() userRole = '';
  @Input() active = '';
  @Input() navItems: NavItem[] = [];
  @Output() navigate = new EventEmitter<string>();

  isOpen = false;

  go(route: string) {
    this.navigate.emit(route);
    // Close sidebar on mobile after navigation
    if (window.innerWidth <= 991) {
      this.isOpen = false;
    }
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
