import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { ResultsService, ResultsObjectClass } from '../../services/results.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartData: ChartDataset[] = [];
  public barChartLabels: string[] = ['Total execution time (ms)', 'Number of swaps', 'Number of comparisons', 'Delay'];
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { x: { ticks: { color: 'white' } } },
    plugins: { legend: { labels: { color: 'white' } } }
  };


  ngOnInit() {
  }
}
