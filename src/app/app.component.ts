import {Component, OnInit} from '@angular/core';
import {AppStateService} from "./services/app-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements  OnInit{



  ngOnInit(): void {
  }

  constructor(public appState: AppStateService) { }

  title = 'emsi-app';

  actions: Array<any> = [
    {title: 'Home', route:"/home",icon: "house"},
    {title:  "Products"  , route:"/product",icon:"search"},
    {title: "New Product",route:"/new-product", icon: "safe"}
  ]
  currentAction:any
  setCurrent(action:any){
    this.currentAction = action
  }




}
