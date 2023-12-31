import {Component, OnInit} from '@angular/core';
import {AppStateService} from "../services/app-state.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements  OnInit{



  ngOnInit(): void {
  }

  constructor(public appState: AppStateService) { }

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


}
