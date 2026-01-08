import { HttpClient } from '@angular/common/http';
import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from "@angular/router";
import { CommonModule } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-artisan-signup',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './artisan-signup.html',
  styleUrl: './artisan-signup.css'
})
export class ArtisanSignup {
  private http = inject(HttpClient)
  private builder = inject(FormBuilder)
  private router = inject(Router)
  private cdr = inject(ChangeDetectorRef)

  users: any = [];
  sameAs: boolean = false
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
    this.http.post('http://localhost/Hirein/artisanAuth/artisan-signup', this.signupForm.value)
      .subscribe({
        next: (response: any) => {
          console.log('Response:', response)
          if (response.status === 200) {
            this.message = 'Signup Successful!'
            console.log('Message set to:', this.message);
            this.cdr.detectChanges();
            setTimeout(() => {
              this.router.navigate(['/artisan-signin'])
            }, 2000)
          } else {
            this.errorMessage = response.message || 'Registration failed. Please try again.';
            console.log('Error message set to:', this.errorMessage);
            this.cdr.detectChanges();
          }
        },
        error: (error) => {
          this.errorMessage = 'An error occurred. Please check your connection and try again.';
          console.log('Error message set to:', this.errorMessage);
          this.cdr.detectChanges();
          console.error('Error:', error);
        }
      })
  }


  confirmPassword() {
    // console.log(this.signupForm.value.password);
    if (this.signupForm.value.confirm_password === this.signupForm.value.password) {
      this.sameAs = true
    }


  }
}
