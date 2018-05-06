import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  data: Date = new Date();
  focus;
  focus1;

   items = [
      {
          'id': 1,
          'name': 'Лёд',
          'size': '50х50',
          'price': 100,
          'images': [
              'item_1-1.jpg',
              'item_1-2.jpg',
              'item_1-3.jpg',
              'item_1-4.jpg'
          ]
      },{
          'id': 2,
          'name': 'Ретро крупная',
          'size': '50х50',
          'price': 100,
          'images': [
              'item_2-1.jpg',
              'item_2-2.jpg',
              'item_2-3.jpg'
          ]
      },{
          'id': 3,
          'name': 'Ветер',
          'size': '50х50',
          'price': 100,
          'images': [
              'item_3-1.jpg',
              'item_3-2.jpg',
              'item_3-3.jpg',
              'item_3-4.jpg'
          ]
      },
  ];

  constructor() { }

  ngOnInit() {
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
}
