import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public pieChartData: ChartDataset[] = [];
  public pieChartLabels: any[] = ['Total execution time (ms)', 'Number of swaps', 'Number of comparisons', 'Delay'];
  public pieChartOptions: ChartOptions = {
    responsive: true,
    aspectRatio: 2,
    scales: { x: { ticks: { color: 'white' } } },
    plugins : {
      legend: { labels: { color: 'white' } },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.label || '';
          }
        }
      }
    },
  };


  ngOnInit() {
  }
}
