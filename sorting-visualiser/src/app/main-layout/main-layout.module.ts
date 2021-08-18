import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
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
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class MainLayoutModule { }
