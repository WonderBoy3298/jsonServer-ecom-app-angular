import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {first, firstValueFrom} from "rxjs";
import {AppStateService} from "./app-state.service";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  http:HttpClient,private appState: AppStateService) { }

   async login(username: string  , password: string){
    let resp:any = await firstValueFrom(this.http.get(`http://localhost:8089/users/${username}`))
     if (password==atob(resp.password)){
       let decodedJwt:any = jwtDecode(resp.token);
       this.appState.authState.isAuthenticated = true
       this.appState.authState.username = decodedJwt.sub
       this.appState.authState.roles = decodedJwt.roles
       this.appState.authState.token = decodedJwt.token

       return Promise.resolve(true)
     }else{
       return Promise.reject("Bad credentials");
     }

  }
}
