import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-customer-signin',
  imports: [FormsModule, RouterLink, ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './customer_signin.html',
  styleUrl: './customer_signin.css'
})
export class CUSTOMERSIGNIN {
  private builder = inject(FormBuilder)

  signinForm = this.builder.group({
    email: ['', [Validators.required,  Validators.email]],
    password: ['', [Validators.required, 
     Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ]],
  })

  register() {
    console.log(this.signinForm.valid);
  }

}
