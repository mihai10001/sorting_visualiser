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

    this.cdRef.detectChanges();
  }

}
