import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectLi:string = 'dashboard1';
  selectTitle:string = 'dashboard';
  acturl:string = window.location.href;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.selectLi = this.acturl.substring(this.acturl.lastIndexOf("/")+1);
  }

  onSelect(li:string): void{
    this.selectLi = li;
  }

  onSelectTitle(title:string): void{
    this.selectTitle = title;
  }
}
