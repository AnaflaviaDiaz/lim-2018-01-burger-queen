import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit {

  @Input() typefood = true;

  constructor() { 
    console.log(this.typefood)
  }

  ngOnInit() {
  }

}
