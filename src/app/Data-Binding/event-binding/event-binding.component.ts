import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {}
  clicks = 0;
  myText: string = 'Hello World';
  Clickedbutton(){
    console.log("I have been checked");
    this.clicks++;
  }
  showData(element: any){
    console.log(element.target.value);
    this.myText = element.target.value;
    
  }

}
