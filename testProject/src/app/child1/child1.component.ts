import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input() recivedData: any
  result
  @Output() AreaOutput = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
    console.log('hello')

  }

  area() {
    this.result = this.recivedData['height'] * this.recivedData["width"]
    this.AreaOutput.emit(this.result)
  }
}
