import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  @Input() amount = 0;
  total: number;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    this.total;
  }

}
