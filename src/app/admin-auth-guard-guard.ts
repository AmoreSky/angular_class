import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode, JwtPayload } from 'jwt-decode';

// interface JwtPayload {
//   user_id:Number,
//   email:String,
//   first_name:String,
//   role:String,
//   iat:Number,
//   exp:Number,
// }


export const adminAuthGuardGuard: CanActivateFn = (route, state) => {
  // const payload:any = ''
  const token = localStorage['token'];
  const _http = inject(HttpClient);
  const router = inject(Router);
  

  if (token){
    const decoded:any = jwtDecode<JwtPayload>(token);
    const userType = decoded.role
    const expTime = decoded.exp * 1000 ;
    const now = Date.now()
    if (( now - expTime) < 3600 && userType == 'admin'){ //check if the person is an admin
      return true;
    }else{
      router.navigate(["/admin_signin"])
    }
  }
  

  router.navigate(["/admin_signin"])
  return false;
};
