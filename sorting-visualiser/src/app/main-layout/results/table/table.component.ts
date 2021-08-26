import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../services/results.service';
import { ResultsObjectClass } from '../../services/results.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  columns = {
    'functionName': 'Function name',
    'numberOfComparisons': 'Number of comparisons',
    'numberOfSwaps': 'Number of swaps',
    'totalExecutionTime': 'Total execution time (ms)',
    'delayUsed': 'Delay used'
  };
  displayedColumns: string[] = Object.keys(this.columns);
  dataSource: ResultsObjectClass[] = [];

  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    this.resultsService.resultsSubject.subscribe(
      () => this.dataSource = [...this.resultsService.results as ResultsObjectClass[]]
    );
  }
}
