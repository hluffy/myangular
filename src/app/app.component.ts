import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectLi:string;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    let acturl:string = window.location.href;
    this.selectLi = this.acturl.substring(this.acturl.lastIndexOf("/")+1);
  }

  title = 'adminlte';

  acturl:string = window.location.href;
  console.log(acturl);




  onSelect(li:string): void{
    this.selectLi = li;
  }
}
