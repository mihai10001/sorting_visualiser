import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ResultsService, ResultsObjectClass } from '../../services/results.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }
  columns = {
    'functionName': 'Function name',
    'totalExecutionTime': 'Total execution time (ms)',
    'numberOfComparisons': 'Number of comparisons',
    'numberOfSwaps': 'Number of swaps',
    'delayUsed': 'Delay used'
  };
  displayedColumns: string[] = Object.keys(this.columns);
  dataSource: MatTableDataSource<ResultsObjectClass> = new MatTableDataSource();

  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    this.resultsService.resultsSubject.subscribe(
      () => this.dataSource.data = [...this.resultsService.results as ResultsObjectClass[]]
    );
  }
}
