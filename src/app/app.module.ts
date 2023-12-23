import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { HomeComponent } from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ProductServiceService} from "./services/product-service.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditProductComponent } from './edit-product/edit-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppErrorsComponent } from './app-errors/app-errors.component';
import {AppHttpInterceptor} from "./services/app-interceptor.interceptor";
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NewProductsComponent,
    HomeComponent,
    EditProductComponent,
    DashboardComponent,
    AppErrorsComponent,
    LoginComponent,
    AdminTemplateComponent,
    NotAuthorizedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass: AppHttpInterceptor , multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
