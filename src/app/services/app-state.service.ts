import { Injectable } from '@angular/core';
import {Product} from "../model/product.model";
import {withInterceptorsFromDi} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor() { }

  public  productState:any = {
    products : [],
    keyword : "",
    totalPages : 0 ,
    pageSize:3 ,
    currentPage:1,
    totalProduct:20,
    status:"",
    errorMessage:""
}
  public authState:any ={
    isAuthenticated:false,
    username: undefined,
    roles: undefined,
    token: undefined
  }



  public setProductState(state:any): void{
    this.productState(...this.productState, ...state)
  }






}
