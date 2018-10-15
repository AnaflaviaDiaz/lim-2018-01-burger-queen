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
  totalAmount: number;
  uniqueContentOrders = [];

  constructor() {
    this.haveOrder = false;
    this.totalAmount = 0;
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck(): void {


    if (this.orderFood) {

      if (this.orderFood.checked === false) {

        this.totalAmount = this.totalAmount - this.orderFood.price;

        const index = this.contentOrdersArr.indexOf(this.orderFood);
        this.contentOrdersArr.splice(index, 1);

      } else {


        this.totalAmount = this.totalAmount + this.orderFood.price;

        this.contentOrdersArr.push(this.orderFood);

        if (this.contentOrdersArr.length > 0) {
          this.uniqueContentOrders = this.contentOrdersArr.filter((value, index, self) => self.indexOf(value) === index);

          console.log(this.uniqueContentOrders);
        }

      }
    }

    // mostrarse contenido de ordenes
    if (this.contentOrdersArr.length > 0) {
      this.haveOrder = true;
    } else {
      this.haveOrder = false;
    }


  }

}
