import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {HomeComponent} from "./home/home.component";
import {NewProductsComponent} from "./new-products/new-products.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthorizationGuard} from "./guards/authorization.guard";
import {AuthenticationGuard} from "./guards/authentification.guard";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";

const routes: Routes = [
  {path:"login",component: LoginComponent},
  {
    path:"admin",canActivate:[AuthenticationGuard],component: AdminTemplateComponent,
    children: [
      {path: "product",component: ProductsComponent},
      {path: "new-product", component: NewProductsComponent,canActivate:[AuthorizationGuard],data:{requiredRoles:['ADMIN']}},
      {path:"edit-product/:prodId",component: EditProductComponent,canActivate:[AuthorizationGuard],data:{requiredRoles:['ADMIN']}},
    ]
  },
  {path: "home" , component: HomeComponent},
  {path:"admin/notAuthorized",component: NotAuthorizedComponent},
  {path:"",redirectTo:"login",pathMatch:"full"}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
