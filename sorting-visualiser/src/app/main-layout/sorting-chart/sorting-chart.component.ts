import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { ResultsService, ResultsObjectClass } from '../services/results.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sorting-chart',
  templateUrl: './sorting-chart.component.html',
  styleUrls: ['./sorting-chart.component.css']
})
export class SortingChartComponent implements OnInit, OnDestroy {

  constructor(
    private settingsService: SettingsService,
    private resultsService: ResultsService)
  { }

  @Input() componentWidth: number = 0;
  @Input() componentHeight: number = 0;
  @Input() sortingFunction: Function = Function();
  @Input() sortingFunctionName: string = '';
  
  delay: number = this.settingsService.delay;
  inputArray: number[] = [...this.settingsService.inputArray];
  inputArrayLength: number = this.settingsService.inputArrayLength;
  inputArrayMaximum: number = Math.max(...this.settingsService.inputArray);
  highlightedIndexArray: number[] = [];
  barColor: string = this.settingsService.colors.barColor;
  highlightedBarColor: string = this.settingsService.colors.highlightedBarColor;
  result: ResultsObjectClass = new ResultsObjectClass();

  playSortingSubscription: Subscription =  new Subscription();

  async ngOnInit() {
    this.playSortingSubscription = this.settingsService.playSortingFunction.subscribe(async () => {
      this.reloadSettings();

      const t0 = performance.now();
      const result: ResultsObjectClass = await this.sortingFunction(this.inputArray, this.highlightedIndexArray, this.delay);
      const t1 = performance.now();

      result.functionName = this.sortingFunctionName;
      result.totalExecutionTime = Math.round((t1 - t0) * 100) / 100;
      result.delayUsed = this.delay;

      this.result = result;
      this.resultsService.resultsPush = result;
      this.resultsService.resultsSubjectNext = true;
    });
  }

  reloadSettings() {
    this.delay = this.settingsService.delay;
    this.inputArray = [...this.settingsService.inputArray];
    this.inputArrayLength = this.settingsService.inputArrayLength;
    this.inputArrayMaximum = Math.max(...this.settingsService.inputArray);
    this.highlightedIndexArray = [];
    this.barColor = this.settingsService.colors.barColor;
    this.highlightedBarColor = this.settingsService.colors.highlightedBarColor;
    this.result = new ResultsObjectClass();
  }

  ngOnDestroy() {
    this.playSortingSubscription.unsubscribe();
  }
}
