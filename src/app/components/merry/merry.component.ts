import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merry',
  templateUrl: './merry.component.html',
  styleUrls: ['./merry.component.css']
})
export class MerryComponent implements OnInit {

  name:string="merry";
  state:string="NJ";
  interests:string[]=["outdoor activities", "crafts", "board games", "cats", "reading"];
  quote:string="Cats have a scam going – you buy the food, they eat the food, they go away; that’s the deal.";

  constructor() { }

  ngOnInit(): void {
  }

}
