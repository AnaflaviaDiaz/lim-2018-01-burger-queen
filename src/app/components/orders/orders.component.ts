import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  @Input() haveOrder: boolean;
  @Input() orderFood: any;
  contentOrdersArr = [];

  constructor() {
    this.haveOrder = false;
  }

  ngOnInit() {
  }

  ngDoCheck(): void {


    if (this.orderFood) {

      if (this.orderFood.checked === false) {
        const index = this.contentOrdersArr.indexOf(this.orderFood);
        this.contentOrdersArr.splice(index, 1);
      } else {
        this.contentOrdersArr.push(this.orderFood);
      }
    }

    // mostrarse contenido de ordenes
    if (this.contentOrdersArr.length > 0) {
      this.haveOrder = true;
    }
    else {
      this.haveOrder = false;
    }
  }

}
