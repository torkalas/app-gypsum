///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {

    data: Date = new Date();
    date: {year: number, month: number};
    model: NgbDateStruct;

    constructor( config: NgbAccordionConfig) {
        config.closeOthers = true;
        config.type = 'info';
    }

    ngOnInit() {
        const rellaxHeader = new Rellax('.rellax-header');
        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('home-page');
    }

    ngOnDestroy() {
        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('home-page');
    }
}
