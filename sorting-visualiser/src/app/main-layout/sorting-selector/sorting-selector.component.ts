import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SettingsService } from '../services/settings.service';
import { SortingFunctions, SortingFunctionObjectType } from '../../sorting-functions';

@Component({
  selector: 'app-sorting-selector',
  templateUrl: './sorting-selector.component.html',
  styleUrls: ['./sorting-selector.component.css']
})
export class SortingSelectorComponent implements OnInit {

  sortingFunctions: SortingFunctionObjectType = SortingFunctions;
  selectedSortingFunctionForm: FormControl = new FormControl();
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

  
  generateRandomInputArray(arraySize: number): number[] {
    return Array.from({length: arraySize},
      () => Math.floor(Math.random() * 100)); 
  }
}
