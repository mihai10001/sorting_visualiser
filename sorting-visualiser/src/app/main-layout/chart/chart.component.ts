import { SettingsService } from '../services/settings.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges {

  constructor(
    private settingsService: SettingsService,
    private resultsService: ResultsService)
  { }

  @Input() componentWidth: number = 0;
  @Input() componentHeight: number = 0;
  @Input() sortingFunction: Function = Function();
  @Input() delay: number = 0;
  
  delay: number = this.settingsService.delay;
  inputArray: number[] = [...this.settingsService.inputArray];
  inputArrayLength: number = this.settingsService.inputArrayLength;
  inputArrayMaximum: number = Math.max(...this.settingsService.inputArray);
  highlightedIndexArray: number[] = [];

  async ngOnInit() {

  reloadSettings() {
    this.delay = this.settingsService.delay;
    this.inputArray = [...this.settingsService.inputArray];
    this.inputArrayLength = this.settingsService.inputArrayLength;
    this.inputArrayMaximum = Math.max(...this.settingsService.inputArray);
    this.highlightedIndexArray = [];
  }

}
