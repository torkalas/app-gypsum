import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import * as Rellax from 'rellax';
import { ProductService, Product } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy, AfterViewChecked {
  data: Date = new Date();
  focus;
  focus1;

   items: Product[] = [];

   param: string;
   fragment: string;

  constructor(
      private productService: ProductService,
      private router: Router,
      private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });

    this.items = this.productService.getProducts();

    const rellaxHeader = new Rellax('.rellax-header');
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('products-page');
      const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

  ngAfterViewChecked(): void {
    try {
      if (this.fragment) {
          document.querySelector('#' + this.fragment).scrollIntoView();
          window.scrollBy(0, -58);
      }
    } catch (e) { }
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
