import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-customer-signin',
  imports: [FormsModule, ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './customer_signin.html',
  styleUrl: './customer_signin.css'
})
export class CUSTOMERSIGNIN {
  private http = inject(HttpClient);
  private builder = inject(FormBuilder);
  private router = inject(Router);
  private cd = inject(ChangeDetectorRef);

  loginForm = this.builder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,
    Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ]],
  })

  errorMessage = '';
  successMessage = '';

  login() {
    this.errorMessage = '';
    this.successMessage = '';
    this.http.post('http://localhost/Hirein/auth/customer_signin', this.loginForm.value)
      .subscribe({
        next: (response: any) => {
          if (response.status === 200) {
            localStorage.setItem('token', response.token);
            console.log(response);
            
            this.successMessage = 'Login successful! Redirecting...';
            this.cd.detectChanges();
            setTimeout(() => {
              this.router.navigate(['/client-dashboard'])
            }, 2000)
          } else {
            this.errorMessage = response.message || 'Login failed. Please try again.';
            this.cd.detectChanges();
          }
        },
        error: (error) => {
          this.errorMessage = error?.error?.message || 'An error occurred. Please try again.';
          this.cd.detectChanges();
        }
      })
  }
}
