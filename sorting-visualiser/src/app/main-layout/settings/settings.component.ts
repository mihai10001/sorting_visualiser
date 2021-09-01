import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SettingsService, ColorType, InputArrayTypeObject, possibleInputArrayTypes } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  customizeSettingsForm!: FormGroup;
  possibleInputArrayTypes: InputArrayTypeObject = possibleInputArrayTypes;

  constructor(private formBuilder: FormBuilder, private settingsService: SettingsService) { }

  ngOnInit() {
    this.customizeSettingsForm = this.formBuilder.group({
      delay: [this.settingsService.delay],
      inputArrayLength: [this.settingsService.inputArrayLength],
      inputArrayType: [this.settingsService.inputArrayType],
      userInputArray: ['7, 6, 5, 4, 3, 2, 1'],
      barColor: [this.settingsService.colors.barColor],
      highlightedBarColor: [this.settingsService.colors.highlightedBarColor],
    });

    this.customizeSettingsForm.valueChanges.subscribe(formValue => {
      this.settingsService.delay = formValue.delay;
      this.settingsService.inputArrayType = formValue.inputArrayType;
      this.settingsService.inputArray = this.sanitizeUserInputArray(formValue.userInputArray);
      this.settingsService.inputArrayLength = formValue.inputArrayType === 'userInputArray'
        ? this.settingsService.inputArray.length 
        : formValue.inputArrayLength;
      this.settingsService.colors = { 'barColor': formValue.barColor, 'highlightedBarColor': formValue.highlightedBarColor } as ColorType;
    });
  }

  sanitizeUserInputArray(userInputString: string) {
    // Only numbers and ',.-' characters allowed
    userInputString = userInputString.replace(/[^\d,.-]/g, '');
    return userInputString
      .split(',')
      .filter(el => parseFloat(el.trim()) !== NaN)
      .map(el => parseFloat(el));
  }
}
