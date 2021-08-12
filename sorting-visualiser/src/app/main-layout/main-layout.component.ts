import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  screenWidth: number = window.innerWidth / 2 || 0;
  screenHeight: number = window.innerHeight / 2 || 0;

  nrOfSortingBars: number = 100;
  maxBarHeight: number = 40;
  barWidth = this.screenWidth / this.nrOfSortingBars;
  sortingBars: number[] = Array.from({length: this.nrOfSortingBars}, () => Math.floor(Math.random() * this.maxBarHeight + 1));

  comparedFirstBarIndex: number = 0;
  comparedSecondBarIndex: number = 0;

  constructor() { }

  async ngOnInit() {
    await this.randomBubbleSort(this.sortingBars);
  }

  async randomBubbleSort(array: number[]) {
    for(let i = 0; i < array.length - 1; i++)
      for(let j = 0; j < array.length - i - 1; j++) {
        if(array[j] > array[j+1]) {
          this.comparedFirstBarIndex = j;
          this.comparedSecondBarIndex = j + 1;
          await this.swap(array, j, j+1);
          this.sortingBars = array;
        }
      }
    console.log(array);
  }

  async swap(array: number[], firstIndex: number, secondIndex: number) {
    await this.sleep(100);
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
  }

  async sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
