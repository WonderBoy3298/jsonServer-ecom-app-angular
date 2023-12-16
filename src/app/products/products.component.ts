import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductServiceService} from "../services/product-service.service";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements  OnInit{


  constructor(private  http:HttpClient , private  productService: ProductServiceService){
  }

  public  products$!:  Observable<Array<Product>>
  public  keyword : string="";
  ngOnInit(): void {

    this.products$ = this.productService.getProduct(1,2);

  }

  handlecheck(product:any){

    this.productService.checkProduct(product).subscribe({
      next:(data) =>{
        product.checked = !product.checked
      },error:(err)=>{
        console.log("error")
      }

    })

  }

  handleDelete(product:Product){
    if (confirm("Are you Sure"))
    this.productService.deleteProduct(product).subscribe({
      next:(data)=>{
        this.products$ = this.productService.getProduct()
      },error:(err) =>{
        console.log("this is an error from handle delete"+err)
      }
    })

  }


  searchProducts(){
    this.products$ = this.productService.findProd(this.keyword)
  }


}
