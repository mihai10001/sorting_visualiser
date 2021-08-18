import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    MaterialModule
  ]
})
export class MainLayoutModule { }
