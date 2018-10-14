import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  breakfast = true;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    // console.log(this.breakfast);
  }

}
