import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  imports: [FormsModule, ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  private http = inject(HttpClient)
  private builder = inject(FormBuilder)
  private router = inject(Router)
  private cdr = inject(ChangeDetectorRef)

  users: any = [];
  sameAs: boolean = false;
  errorMessage = '';
  message = '';

  signupForm = this.builder.group({
    first_name: ['', [Validators.required, Validators.minLength(2)]],
    last_name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,
    Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ]],
    confirm_password: ['', [Validators.required]],
  })

  register() {
    this.errorMessage = '';
    this.message = '';

    this.users.push(this.signupForm.value)

    this.http.post('http://localhost/Hirein/auth/signup', this.signupForm.value)
      .subscribe({
        next: (response: any) => {
          if (response.status === 200) {
            this.message = 'Signup Successful!';
            this.cdr.detectChanges();
            setTimeout(() => {
              this.router.navigate(['/customer_signin'])
            }, 2000)
          } else {
            this.errorMessage = response.message || 'Registration failed. Please try again.';
            this.cdr.detectChanges();
          }
        },
        error: (error) => {
          this.errorMessage = 'An error occurred. Please check your connection and try again.';
          this.cdr.detectChanges();
        }
      })
  }

  confirmPassword() {
    if (this.signupForm.value.confirm_password === this.signupForm.value.password) {
      this.sameAs = true
    }
  }
}
