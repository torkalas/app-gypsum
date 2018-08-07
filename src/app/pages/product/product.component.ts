import {Component, OnInit, OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import * as Rellax from 'rellax';
import { ProductService, Product } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit, OnDestroy {
  date: Date = new Date();
  focus;
  focus1;
  product: Product;

  items: GalleryItem[];
  imageData = [];

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router,
              public gallery: Gallery,
              public lightbox: Lightbox) {

    this.loadProduct();
  }

  loadProduct() {
      const id = this.route.snapshot.paramMap.get('id');
      this.product = this.productService.getProduct(id);
      this.imageData = this.product.images;
      console.log(this.product);
      if (!this.product) {
          this.router.navigate(['/products']);
      }
  }

  ngOnInit() {
    const rellaxHeader = new Rellax('.rellax-header');
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('product-page');
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

      // Creat gallery items
      this.items = this.imageData.map(item => {
          return new ImageItem({ src: 'assets/img/products/' + this.product.code + '/' + item, thumb: 'assets/img/products/' + this.product.code + '/' + item});
      });

      // Load items into the lightbox gallery ref
      this.gallery.ref('lightbox').load(this.items);
  }
  ngOnDestroy() {
      const body = document.getElementsByTagName('body')[0];
    body.classList.remove('product-page');
      const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
