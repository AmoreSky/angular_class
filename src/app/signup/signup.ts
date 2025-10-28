import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-signup',
  imports: [FormsModule, ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup implements OnInit{
  ngOnInit(): void {
    this.users = localStorage['users'] ? JSON.parse(localStorage['users']) : []
  }

  private http = inject(HttpClient)
  private builder = inject(FormBuilder)
  users:any = [];
  sameAs:boolean = false

  signupForm = this.builder.group({
    first_name: ['', [Validators.required, Validators.minLength(2)]],
    last_name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required,  Validators.email]],
    password: ['', [Validators.required, 
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ]],
    confirm_password: ['', [Validators.required]],
  })

  register() {
    // console.log(this.signupForm.valid);
    //this.users.push(this.signupForm.value);
    //localStorage.setItem('users', JSON.stringify(this.users))
    //send to Database
    this.http.post('http://localhost:8080/Hirein/Auth.php', this.signupForm.value).subscribe(response => {
      console.log(response);
      
    })

  }


  confirmPassword(){
    // console.log(this.signupForm.value.password);
    if(this.signupForm.value.confirm_password === this.signupForm.value.password){
      this.sameAs = true
    }

    
  }
}
