import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-admin',
  imports: [FormsModule, ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './add-admin.html',
  styleUrl: './add-admin.css',
})
export class AddAdmin {
  private http = inject(HttpClient)
  private builder = inject(FormBuilder)
  private router = inject(Router)
  private cdr = inject(ChangeDetectorRef)
  users: any = [];
  sameAs: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

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
    this.successMessage = '';

    this.users.push(this.signupForm.value)
    this.http.post('http://localhost/Hirein/adminAuth/signup', this.signupForm.value)
      .subscribe({
        next: (response: any) => {
          if (response.status === 200) {
            this.successMessage = 'Admin account created successfully! Redirecting...';
            this.cdr.detectChanges();
            setTimeout(() => {
              this.router.navigate(['/admin_signin'])
            }, 2000);
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
    // console.log(this.signupForm.value.password);
    if (this.signupForm.value.confirm_password === this.signupForm.value.password) {
      this.sameAs = true
    }


  }

}
