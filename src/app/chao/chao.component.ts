import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chao',
  templateUrl: './chao.component.html',
  styleUrls: ['./chao.component.css']
})
export class ChaoComponent implements OnInit {

  @Input() codiguito: String;

  constructor() { }

  ngOnInit() {
  }

}
