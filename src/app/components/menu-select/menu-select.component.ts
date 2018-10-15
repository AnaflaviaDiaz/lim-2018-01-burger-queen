import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-select',
  templateUrl: './menu-select.component.html',
  styleUrls: ['./menu-select.component.css']
})
export class MenuSelectComponent implements OnInit {

  breakfast = true;

  @Output() typeFood: EventEmitter<boolean>;

  constructor() {
    this.typeFood = new EventEmitter();
    // console.log(this.typeFood);
  }

  ngOnInit() {
  }

  showBreakfast() {
    this.breakfast = true;
    this.typeFood.emit(this.breakfast);
  }

  showMenu() {
    this.breakfast = false;
    this.typeFood.emit(this.breakfast);
  }

}
