import {Component, OnInit} from '@angular/core';
import {AppStateService} from "../services/app-state.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent implements  OnInit{

  ngOnInit(): void {
  }

  constructor(public appState: AppStateService,private  router:Router) { }

  title = 'emsi-app';


  actions: Array<any> = [
    {title: 'Home', route:"/home",icon: "house"},
    {title:  "Products"  , route:"/admin/product",icon:"search"},
    {title: "New Product",route:"/admin/new-product", icon: "safe"}
  ]

  currentAction:any

  setCurrent(action:any){
    this.currentAction = action
  }

  logout(){
    this.appState.authState={}
    this.router.navigateByUrl("/login")
  }

  login(){
    this.router.navigateByUrl("/login")
  }


}
