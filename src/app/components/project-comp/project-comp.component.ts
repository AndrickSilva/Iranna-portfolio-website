import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-comp',
  templateUrl: './project-comp.component.html',
  styleUrls: ['./project-comp.component.css']
})
export class ProjectCompComponent implements OnInit {

  CardImg: string = '../assets/img/project1.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
