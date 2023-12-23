import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {ProductServiceService} from "../services/product-service.service";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";
import {resolve} from "@angular/compiler-cli";
import {Router} from "@angular/router";
import {AppStateService} from "../services/app-state.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements  OnInit{


  constructor(private  http:HttpClient ,
              private  productService: ProductServiceService,
              private router:Router,
              public  appState : AppStateService){
  }

  public  products! : Product[]
  public  keyword : string="";
  totalPages : number=0 ;
  pageSize:number=3 ;
  currentPage: number  =1;



  getProduct(){
    this.appState.productState.status="Loading"
    this.productService.getProduct(this.currentPage, this.pageSize).subscribe({
      next: (data) => {
        this.products = data.body as Product[]
        let totalProd = parseInt(data.headers.get('x-total-count')!)
        this.appState.productState.products = totalProd
        this.totalPages = Math.floor(totalProd / this.pageSize);
        if (totalProd % this.pageSize != 0) {
          this.totalPages = this.totalPages + 1;
        }
        this.appState.productState.status="Loaded"
      },error:(err) => {
        this.appState.productState.status = "Error"
        this.appState.productState.errorMessage=err

      }
    });
  }

  ngOnInit(): void {
    this.getProduct()
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
         this.productService.getProduct().subscribe({
           next : (data) =>{
             this.products = data.body as Product[]
           },error :(err)=>{
             console.log("this is an error "+ err)
           }
         })
      },error:(err) =>{
        console.log("this is an error from handle delete"+err)
      }
    })

  }
  searchProducts(){

     this.productService.findProd(this.keyword).subscribe({
       next:(data)=>{
          this.products = data
       },error:(err)=>{
          console.log(err)
       }
     })
  }
  goTopage(n:number){
    this.currentPage = n
    this.getProduct()
  }

  goToEdit(product:Product){
    this.router.navigateByUrl(`admin/edit-product/${product.id}`)
  }






}
