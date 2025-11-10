import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-customer-signin',
  imports: [FormsModule, RouterLink, ReactiveFormsModule, RouterLink, CommonModule],
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

  seeError = false;
  message = '';

  login() {
    // console.log(this.signinForm.valid);
    this.http.post('http://localhost/Hirein/auth/customer_signin', this.loginForm.value)
      .subscribe((response: any) => {
        if (response.status === 200) {
          console.log(response);
          localStorage.setItem('token', response.token);
          this.router.navigate(['/client-dashboard'])
        } else {
          this.seeError = true;
          this.message = response.message;
          console.log(this.message);
          // ensure the template updates immediately
          this.cd.detectChanges();
        }
      }, (err: any) => {
        // handle HTTP/network errors
        this.seeError = true;
        this.message = err?.error?.message || 'An error occurred. Please try again.';
        console.error('signin error', err);
        this.cd.detectChanges();
      })

  }

}
