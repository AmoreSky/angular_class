import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-side-bar',
  imports: [],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css'
})
export class SIDEBAR {

  @Input() userName = 'Jane Smith';
  @Input() userRole = 'Tailor';
  @Input() active = 'dashboard';
  @Output() navigate = new EventEmitter<string>();


  go(route: string) { this.navigate.emit(route); }
}
