///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import * as Rellax from 'rellax';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit, OnDestroy {
  zoom = 14;
  lat = 44.445248;
  lng = 26.099672;
  styles: any[] =
      [
          {'featureType': 'water', 'elementType': 'geometry', 'stylers': [{'color': '#e9e9e9'}, {'lightness': 17}]},
          {'featureType': 'landscape', 'elementType': 'geometry', 'stylers': [{'color': '#f5f5f5'}, {'lightness': 20}]},
          {'featureType': 'road.highway', 'elementType': 'geometry.fill', 'stylers': [{'color': '#ffffff'}, {'lightness': 17}]},
          {'featureType': 'road.highway', 'elementType': 'geometry.stroke', 'stylers': [{'color': '#ffffff'}, {'lightness': 29}, {'weight': 0.2}]},
          {'featureType': 'road.arterial', 'elementType': 'geometry', 'stylers': [{'color': '#ffffff'}, {'lightness': 18}]},
          {'featureType': 'road.local', 'elementType': 'geometry', 'stylers': [{'color': '#ffffff'}, {'lightness': 16}]},
          {'featureType': 'poi', 'elementType': 'geometry', 'stylers': [{'color': '#f5f5f5'}, {'lightness': 21}]},
          {'featureType': 'poi.park', 'elementType': 'geometry', 'stylers': [{'color': '#dedede'}, {'lightness': 21}]},
          {'elementType': 'labels.text.stroke', 'stylers': [{'visibility': 'on'}, {'color': '#ffffff'}, {'lightness': 16}]},
          {'elementType': 'labels.text.fill', 'stylers': [{'saturation': 36}, {'color': '#333333'}, {'lightness': 40}]},
          {'elementType': 'labels.icon', 'stylers': [{'visibility': 'off'}]},
          {'featureType': 'transit', 'elementType': 'geometry', 'stylers': [{'color': '#f2f2f2'}, {'lightness': 19}]},
          {'featureType': 'administrative', 'elementType': 'geometry.fill', 'stylers': [{'color': '#fefefe'}, {'lightness': 20}]},
          {'featureType': 'administrative', 'elementType': 'geometry.stroke', 'stylers': [{'color': '#fefefe'}, {'lightness': 17}, {'weight': 1.2}]}
      ];
    data: Date = new Date();
    focus;
    focus1;

    items: GalleryItem[];
    imageData = data;

    constructor(public gallery: Gallery, public lightbox: Lightbox) { }

    ngOnInit() {
      const rellaxHeader = new Rellax('.rellax-header');

        const body = document.getElementsByTagName('body')[0];
        body.classList.add('contact-page');
        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');

        // Creat gallery items
        this.items = this.imageData.map(item => {
            return new ImageItem({ src: item.srcUrl, thumb: item.previewUrl });
        });

        // Load items into the lightbox gallery ref
        this.gallery.ref('lightbox').load(this.items);
    }
    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('contact-page');
        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }
}

const data = [
    {
        srcUrl: 'assets/img/bg1.jpg',
        previewUrl: 'assets/img/bg1.jpg'
    },
    {
        srcUrl: 'assets/img/bg3.jpg',
        previewUrl: 'assets/img/bg3.jpg'
    },
    {
        srcUrl: 'assets/img/bg5.jpg',
        previewUrl: 'assets/img/bg5.jpg'
    },
    {
        srcUrl: 'assets/img/bg8.jpg',
        previewUrl: 'assets/img/bg8.jpg'
    },
    {
        srcUrl: 'assets/img/gypsum_logo.png',
        previewUrl: 'assets/img/gypsum_logo.png'
    },
    {
        srcUrl: 'assets/img/gypum_home_bg.jpg',
        previewUrl: 'assets/img/gypum_home_bg.jpg'
    },
    {
        srcUrl: 'assets/img/logo.png',
        previewUrl: 'assets/img/logo.png'
    }
];
