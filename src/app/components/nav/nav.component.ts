import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  classBind: any = 'fa fa-bars'
  constructor() { }

  ngOnInit(): void {
  }
  navBar() {
    this.classBind = this.classBind == 'fa fa-bars' ? 'fa fa-xmark' : 'fa fa-bars'
  }
}
