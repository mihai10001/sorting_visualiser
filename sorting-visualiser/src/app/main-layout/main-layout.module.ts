import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { ChartComponent } from './chart/chart.component';
import { SettingsComponent } from './settings/settings.component';
import { SortingSelectorComponent } from './sorting-selector/sorting-selector.component';

import { SettingsService } from './services/settings.service';
import { ResultsService } from './services/results.service';

@NgModule({
  declarations: [
    MainLayoutComponent,
    SortingSelectorComponent,
    ChartComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    ReactiveFormsModule,
  providers: [
    SettingsService,
    ResultsService
  ]
})
export class MainLayoutModule { }
