import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})
export class InterpolateComponent implements OnInit {
detailsPerson = {name:'Gilbert', age: '25', school:'Moringa school', course:'Fullstack'}
  constructor() { }

  ngOnInit(): void {}
  cars = ['volvo','subaru','Range Rover']
  carIlike(){
    return this.cars[2];
  }
  isSingle = true;
  
}
