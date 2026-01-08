import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-signin',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './admin-signin.html',
  styleUrl: './admin-signin.css',
})
export class AdminSignin {
  private http = inject(HttpClient)
  private builder = inject(FormBuilder)
  private router = inject(Router)
  private cdr = inject(ChangeDetectorRef)

  loginForm = this.builder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  errorMessage = '';
  successMessage = '';

  login() {
    this.errorMessage = '';
    this.successMessage = '';
    this.http.post('http://localhost/Hirein/adminAuth/admin-signin', this.loginForm.value)
      .subscribe({
        next: (response: any) => {
          if (response.status === 200) {
            localStorage.setItem('token', response.token);
            this.successMessage = 'Login successful! Redirecting...';
            this.cdr.detectChanges();
            setTimeout(() => {
              this.router.navigate(['/admin-dashboard'])
            }, 2000)
          } else {
            this.errorMessage = response.message || 'Login failed. Please try again.';
            this.cdr.detectChanges();
          }
        },
        error: (error) => {
          this.errorMessage = 'An error occurred. Please check your connection and try again.';
          this.cdr.detectChanges();
        }
      })
  }
}
