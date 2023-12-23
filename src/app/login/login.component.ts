import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {AppStateService} from "../services/app-state.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements  OnInit{

  formLogin! : FormGroup  ;
  errorMessage:any

  constructor( private  fb:FormBuilder, private  router : Router,private auth : AuthService,private appState:AppStateService) {
  }

  ngOnInit() {
    this.formLogin  = this.fb.group({
      username:this.fb.control(""),
      password : this.fb.control("")

    })


  }

  handleLogin(){
    console.log(this.formLogin.value)
    let username= this.formLogin.value.username
    let password = this.formLogin.value.password

    this.auth.login(username,password).then(
      resp =>{
        this.router.navigateByUrl("/admin")
      }).catch(error =>{
       this.errorMessage=error
      })
  }



}
