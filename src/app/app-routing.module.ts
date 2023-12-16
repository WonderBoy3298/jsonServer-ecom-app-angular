import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {HomeComponent} from "./home/home.component";
import {NewProductsComponent} from "./new-products/new-products.component";

const routes: Routes = [
  {path: "product",component: ProductsComponent},
  {path: "home" , component: HomeComponent},
  {path: "new-product", component: NewProductsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
