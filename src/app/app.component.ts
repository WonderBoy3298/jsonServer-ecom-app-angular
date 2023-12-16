import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



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
