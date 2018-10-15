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
    this.modifyOrder();
  }

  modifyOrder() {
    if (this.orderFood) {

      if (this.orderFood.checked === false) {

        const index = this.uniqueContentOrders.indexOf(this.orderFood);
        this.uniqueContentOrders.splice(index, 1);

        // this.totalAmount = this.totalAmount - this.orderFood.price;

        this.totalAmount = 0;

        for (let _i = 0; _i < this.uniqueContentOrders.length; _i++) {
          const num = this.uniqueContentOrders[_i];
          this.totalAmount = this.totalAmount + num.price;
          console.log(this.totalAmount);
        }

      } else {

        this.contentOrdersArr.push(this.orderFood);
        if (this.contentOrdersArr.length > 0) {

          this.uniqueContentOrders = this.contentOrdersArr.filter((value, index, self) => self.indexOf(value) === index);
          this.contentOrdersArr = this.uniqueContentOrders;

          this.totalAmount = 0;

          for (let _i = 0; _i < this.uniqueContentOrders.length; _i++) {
            const num = this.uniqueContentOrders[_i];
            this.totalAmount = this.totalAmount + num.price;
            console.log(this.totalAmount);
          }
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
