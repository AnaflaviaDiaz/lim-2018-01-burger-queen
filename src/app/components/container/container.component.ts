import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  // seleccion de desayuno o menu por boolean a desayuno como referente
  breakfast = true;

  // item como pedido
  orderFood: any;
  haveOrder: boolean;

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    // console.log(this.breakfast);
  }

}
