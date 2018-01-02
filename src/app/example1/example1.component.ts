import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {

  txtName:string='Type in text box';
  constructor() { }

  ngOnInit() {
  }
}
