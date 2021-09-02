import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { NgChartsModule } from 'ng2-charts';
import { ColorPickerModule } from 'ngx-color-picker';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { ChartComponent } from './chart/chart.component';
import { SettingsComponent } from './settings/settings.component';
import { SortingSelectorComponent } from './sorting-selector/sorting-selector.component';
import { TableComponent } from './results/table/table.component';
import { BarChartComponent } from './results/bar-chart/bar-chart.component';
import { PieChartComponent } from './results/pie-chart/pie-chart.component';
import { LineChartComponent } from './results/line-chart/line-chart.component';
import { LoadingWrapperComponent } from './results/loading-wrapper/loading-wrapper.component';

import { SettingsService } from './services/settings.service';
import { ResultsService } from './services/results.service';


@NgModule({
  declarations: [
    MainLayoutComponent,
    SortingSelectorComponent,
    ChartComponent,
    SettingsComponent,
    TableComponent,
    BarChartComponent,
    PieChartComponent,
    LineChartComponent,
    LoadingWrapperComponent
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    NgChartsModule,
    ColorPickerModule
  ],
  providers: [
    SettingsService,
    ResultsService
  ]
})
export class MainLayoutModule { }
