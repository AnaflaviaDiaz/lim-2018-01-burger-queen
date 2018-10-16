import { Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';

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
  name: string;

  constructor(
    private _firestoreSrv: FirestoreService,
    // private router: Router
  ) {
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
          // console.log(this.totalAmount);
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
            // console.log(this.totalAmount);
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

  sendOrder(username) {
    const data = {
      order: this.uniqueContentOrders,
      username: username,
      amount: this.totalAmount
    };
    if (username) {
      this._firestoreSrv.save(data).then(window.location.reload());
    }

    // console.log(arr);
  }

}
