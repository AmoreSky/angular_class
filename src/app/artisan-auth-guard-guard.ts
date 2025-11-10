import { HttpClient } from '@angular/common/http';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode'

export const artisanAuthGuardGuard: CanActivateFn = (route, state) => {
  const token = localStorage['token'];
  const _http = inject(HttpClient);
  const router = inject(Router);

  if (token){
    const decoded:any = jwtDecode<JwtPayload>(token);
    const expTime = decoded.exp * 1000 ;
    const now = Date.now()
    if (( now - expTime) < 3600){
      return true;
    }else{
      router.navigate(["/artisan-signin"])
    }
  }
  

  router.navigate(["/artisan-signin"])
  return false;
 
  
};
