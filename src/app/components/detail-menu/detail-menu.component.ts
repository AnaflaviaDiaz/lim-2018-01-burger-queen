import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit {

  @Input() typefood = true;
  breakfastArr = [];
  menuArr = [];

  constructor() {
    this.breakfastArr = [
      { 'food': 'Cafe americano', 'price': '5' },
      { 'food': 'Cafe con leche', 'price': '7' },
      { 'food': 'Sandwich de jamón y queso', 'price': '10' },
      { 'food': 'Jugo natural', 'price': '7' }];

    this.menuArr = [
      { 'food': 'Hamburguesa simple', 'price': '10' },
      { 'food': 'Hamburguesa doble', 'price': '15' },
      { 'food': 'Papas fritas', 'price': '5' },
      { 'food': 'Onion Rings', 'price': '5' },
      { 'food': 'Agua 500ml', 'price': '5' },
      { 'food': 'Agua 750ml', 'price': '8' },
      { 'food': 'Gaseosa 500ml', 'price': '7' },
      { 'food': 'Gaseosa 750ml', 'price': '10' }];
  }

  ngOnInit() {
  }

}
