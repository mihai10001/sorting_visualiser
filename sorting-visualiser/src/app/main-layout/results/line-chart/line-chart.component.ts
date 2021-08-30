import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { ResultsService } from '../../services/results.service';

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

  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    this.resultsService.resultsSubject.subscribe(
      () => {
        if (this.resultsService.results.length > 0) {
          this.lineChartData = [
            { data: this.resultsService.results.map( result => result.totalExecutionTime ), label: 'Total execution time (ms)' },
            { data: this.resultsService.results.map( result => result.numberOfComparisons ), label: 'Number of comparisons' },
            { data: this.resultsService.results.map( result => result.numberOfSwaps ), label: 'Number of swaps' }
          ];
          this.lineChartLabels = this.resultsService.results.map( result => result.functionName );
        } else {
          this.lineChartData = [];
        }
      }
    );
  }

}
