import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  @Input() componentWidth: number = 0;
  @Input() componentHeight: number = 0;
  @Input() inputArray: number[] = [];
  @Input() sortingFunction: Function = Function();
  @Input() delay: number = 0;
  
  inputArrayLength: number = 0;
  inputArrayMaximum: number = 0;
  highlightedIndexArray: number[] = [];

  async ngOnInit() {
    this.inputArrayLength = this.inputArray.length;
    this.inputArrayMaximum = Math.max(...this.inputArray);

    await this.sortingFunction(this.inputArray, this.highlightedIndexArray, this.delay);
  }

}
