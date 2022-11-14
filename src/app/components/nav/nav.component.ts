import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  classBind: any = 'fa fa-bars'
  hide: string = "hide"
  constructor() { }

  ngOnInit(): void {
  }

  navBar() {
    this.hide = this.hide == "hide" ? this.hide = "" : this.hide ="hide" 
    // this.hide =!this.hide
    // this.hide = this.hide == true ? this.hide = false : this.hide = true
    this.classBind = this.classBind == 'fa fa-bars' ? 'fa fa-xmark' : 'fa fa-bars'
  }
}
