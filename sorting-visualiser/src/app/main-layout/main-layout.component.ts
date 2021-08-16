import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { bubbleSort } from './sorting-functions';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, AfterViewInit {

  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  randomInputArray: number[] = Array.from({length: 40}, () => Math.floor(Math.random() * 100));
  sortingFunction: Function = bubbleSort;
  isViewInit: boolean = false;
  chartCanvasWidth: number = 0;
  chartCanvasHeight: number = 0;

  constructor(private cdRef : ChangeDetectorRef) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.isViewInit = true;
    this.chartCanvasWidth = this.chartCanvas.nativeElement.offsetWidth;
    this.chartCanvasHeight = this.chartCanvas.nativeElement.offsetHeight || 200;
    this.cdRef.detectChanges();
  }

}
