import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  public lineChartData: ChartDataset[] = [];
  public lineChartLabels: string[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: { x: { ticks: { color: 'white' } } },
    plugins: { legend: { labels: { color: 'white' } } }
  };


  ngOnInit() {
  }

}
