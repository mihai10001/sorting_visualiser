import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SettingsService, InputArrayType } from '../services/settings.service';
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
    this.settingsService.inputArray = this.generateArray(this.settingsService.inputArrayType, this.settingsService.inputArrayLength);

    this.selectedSortingFunctionForm.valueChanges.subscribe(formValue => {
      this.settingsService.selectedSortingFunctionKeysValue = formValue;
    });
  }

  onPlay() {
    this.playClickedCount++;
    this.playClickedCount > 1 
    && (this.settingsService.inputArray = this.generateArray(this.settingsService.inputArrayType, this.settingsService.inputArrayLength));
    this.settingsService.playSortingFunctionValue = true;
    this.resultsService.resultsSetNull = [];
    this.resultsService.resultsSubjectNext = true;
  }

  generateArray(arrayType: InputArrayType, arraySize: number) {
    switch(arrayType) {
      case 'randomSequentialArray':
        return this.generateRandomSequentialArray(arraySize);
      case 'randomArray':
        return this.generateRandomArray(arraySize);
      case 'userInputArray':
        let array = this.settingsService.inputArray;
        this.fisherYatesShuffle(array, 0, 0, 0);
        return array;
    }
  }

  generateRandomArray(arraySize: number): number[] {
    return Array.from({length: arraySize},
      () => Math.floor(Math.random() * 100)); 
  }

  generateRandomSequentialArray(arraySize: number): number[] {
    let array = Array.from(Array(arraySize).keys());
    this.fisherYatesShuffle(array, 0, 0, 0);
    return array;
  }

  fisherYatesShuffle (a: number[], b: number, c: number, d: number) {
    c=a.length;while(c)b=Math.random()*c--|0,d=a[c],a[c]=a[b],a[b]=d
  }
}
