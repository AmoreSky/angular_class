import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  ngOnInit(): void {
    // this.outputStudent();
    this.newStudents = this.students.splice(0,1);
  }
  protected readonly title = signal('angular_class');
  age:Number = 22;
  students:Array<any> = ['Bola', 'lola',  'Tola', 'Kola'];
  newStudents:Array<any> = [];

  outputStudent () {
    console.log(9);
  }
}


