import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  customizeSettingsForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private settingsService: SettingsService) { }

  ngOnInit() {
    this.customizeSettingsForm = this.formBuilder.group({
      delay: [this.settingsService.delay],
      inputArrayLength: [this.settingsService.inputArrayLength],
    });

    this.customizeSettingsForm.valueChanges.subscribe(formValue => {
      this.settingsService.delay = formValue.delay;
      this.settingsService.inputArrayLength = formValue.inputArrayLength;
    });
  }
}
