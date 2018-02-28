import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  generaramdon():String{
    return Math.floor( Math.random() * 255 ).toString(16);
  }

  colorhex():String{
    return "#" + this.generaramdon() + this.generaramdon() + this.generaramdon();
  }
}
