import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-signin',
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './admin-signin.html',
  styleUrl: './admin-signin.css',
})
export class AdminSignin {
  private http = inject(HttpClient)
  private builder = inject(FormBuilder)
  private router = inject(Router)

  loginForm = this.builder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  seeError = false;
  message = '';
  login() {
    this.http.post('http://localhost/Hirein/adminAuth/admin-signin', this.loginForm.value)
      .subscribe((response: any) => {
        console.log(response);

        if (response.status === 200) {
          console.log(response);
          localStorage.setItem('token', response.token);
          this.router.navigate(['/admin-dashboard'])

        } else {
          this.seeError = true;
          this.message = response.message;
          console.log(this.message);

        }

      })
  }
}
