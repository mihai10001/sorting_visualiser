import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SettingsService } from '../services/settings.service';
import { ResultsService } from '../services/results.service';
import { SortingFunctions, SortingFunctionObjectType } from '../../sorting-functions';

@Component({
  selector: 'app-sorting-selector',
  templateUrl: './sorting-selector.component.html',
  styleUrls: ['./sorting-selector.component.css']
})
export class SortingSelectorComponent implements OnInit {

  sortingFunctions: SortingFunctionObjectType = SortingFunctions;
  selectedSortingFunctionForm: FormControl = new FormControl();
  playClickedCount: number = 0;

  
  constructor(
    private settingsService: SettingsService,
    private resultsService: ResultsService
  ) { }

  ngOnInit() {
    this.settingsService.inputArray = this.generateRandomInputArray(this.settingsService.inputArrayLength);

    this.selectedSortingFunctionForm.valueChanges.subscribe(formValue => {
      this.settingsService.selectedSortingFunctionKeysValue = formValue;
    });
  }

  onPlay() {
    this.playClickedCount++;
    this.playClickedCount > 1 
    && (this.settingsService.inputArray = this.generateRandomInputArray(this.settingsService.inputArrayLength));
    this.settingsService.playSortingFunctionValue = true;
    this.resultsService.resultsSetNull = [];
    this.resultsService.resultsSubjectNext = true;
  }
  
  generateRandomInputArray(arraySize: number): number[] {
    return Array.from({length: arraySize},
      () => Math.floor(Math.random() * 100)); 
  }

  fisherYatesShuffle (a: number[], b: number, c: number, d: number) {
    c=a.length;while(c)b=Math.random()*c--|0,d=a[c],a[c]=a[b],a[b]=d
  }
}
