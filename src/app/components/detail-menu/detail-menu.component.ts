import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit {

  @Input() typefood = true;
  @Output() food: EventEmitter<any>;
  @Output() haveOrder: EventEmitter<any>;
  breakfastArr = [];
  menuArr = [];

  constructor() {
    this.breakfastArr = [
      { 'food': 'Cafe americano', 'price': 5, 'checked': false },
      { 'food': 'Cafe con leche', 'price': 7, 'checked': false },
      { 'food': 'Sandwich de jamón y queso', 'price': 10, 'checked': false },
      { 'food': 'Jugo natural', 'price': 7, 'checked': false }];

    this.menuArr = [
      { 'food': 'Hamburguesa simple', 'price': 10, 'checked': false },
      { 'food': 'Hamburguesa doble', 'price': 15, 'checked': false },
      { 'food': 'Papas fritas', 'price': 5, 'checked': false },
      { 'food': 'Onion Rings', 'price': 5, 'checked': false },
      { 'food': 'Agua 500ml', 'price': 5, 'checked': false },
      { 'food': 'Agua 750ml', 'price': 8, 'checked': false },
      { 'food': 'Gaseosa 500ml', 'price': 7, 'checked': false },
      { 'food': 'Gaseosa 750ml', 'price': 10, 'checked': false }];
    this.food = new EventEmitter();
    this.haveOrder = new EventEmitter();
  }

  ngOnInit() {
  }

  selectOrder(itemFood, pos, nameArr) {
    if (nameArr === 'breakfastArr') {
      if (!itemFood.checked) {
        this.breakfastArr[pos].checked = true;
        this.food.emit(itemFood);
        this.haveOrder.emit(this.breakfastArr[pos].checked);
      }
      else {
        this.breakfastArr[pos].checked = false;
        this.food.emit(itemFood);
        this.haveOrder.emit(this.breakfastArr[pos].checked);
      }
    } else {
      if (!itemFood.checked) {
        this.menuArr[pos].checked = true;
        this.food.emit(itemFood);
        this.haveOrder.emit(this.menuArr[pos].checked);
      }
      else {
        this.menuArr[pos].checked = false;
        this.food.emit(itemFood);
        this.haveOrder.emit(this.menuArr[pos].checked);
      }
    }
  }

}
