import { Component, OnInit } from '@angular/core';

@Component({
    selector: '.app-example1',
    templateUrl: './example1.component.html',
    styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {

    public txtName: string = 'Type in text box';
    public itemPrice: number = 0;
    public itemQty: number = 0;

    constructor() { }

    ngOnInit() {
    }
}
