import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
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

  loginForm = this.builder.group({
    email: ['', [Validators.required,  Validators.email]],
    password: ['', [Validators.required, 
     Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ]],
  })

  message='';

  login() {
    // console.log(this.signinForm.valid);
    this.http.post('http://localhost/HireMe/auth/login', this.loginForm.value)
    .subscribe((response:any) =>{
      console.log(response);

      if(response.status === 200){
        console.log(response);
        
      }else{
        this.message = response.message;
      }
      
    })

  }

}
