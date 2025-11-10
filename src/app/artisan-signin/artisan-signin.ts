import { Component, inject } from '@angular/core';
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

  loginForm = this.builder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  seeError = false;
  message = '';
  login() {
    this.http.post('http://localhost/Hirein/artisanAuth/artisan-signin', this.loginForm.value)
      .subscribe((response:any) => {
        console.log(response);
        
        if (response.status === 200) {
          // console.log(response);
          localStorage.setItem('token', response.token);
          this.router.navigate(['/artisan-dashboard'])

        } else {
          this.seeError = true;
          this.message = response.message;
          console.log(this.message);

        }

      })
  }
}
