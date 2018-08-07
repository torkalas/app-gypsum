import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Rellax from 'rellax';
import { ProductService, Product } from "../../services/product.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  data: Date = new Date();
  focus;
  focus1;

   items: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.items = this.productService.getProducts();

    const rellaxHeader = new Rellax('.rellax-header');
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('products-page');
      const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
      const body = document.getElementsByTagName('body')[0];
    body.classList.remove('products-page');
      const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

    gotoProduct(id: number) {
        this.router.navigate(['/product', id]);
    }
}
