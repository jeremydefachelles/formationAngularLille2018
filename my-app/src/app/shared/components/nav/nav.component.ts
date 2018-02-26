import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  // private n'est pas accessible depuis html)
  public isCollapsed = true;
  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'TOTO';
  }

}
