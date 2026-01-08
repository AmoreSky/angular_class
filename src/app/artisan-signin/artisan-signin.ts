import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-artisan-signin',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './artisan-signin.html',
  styleUrl: './artisan-signin.css'
})
export class ArtisanSignin {
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
    this.http.post('http://localhost/Hirein/artisanAuth/artisan-signin', this.loginForm.value)
      .subscribe({
        next: (response: any) => {
          if (response.status === 200) {
            localStorage.setItem('token', response.token);
            this.successMessage = 'Login successful! Redirecting...';
            this.cdr.detectChanges();
            setTimeout(() => {
              this.router.navigate(['/artisan-dashboard'])
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
