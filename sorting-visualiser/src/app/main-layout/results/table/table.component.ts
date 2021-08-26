import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  columns = {
  };
  displayedColumns: string[] = Object.keys(this.columns);
  dataSource: ResultsObjectClass[] = [];


  ngOnInit() {
  }
}
