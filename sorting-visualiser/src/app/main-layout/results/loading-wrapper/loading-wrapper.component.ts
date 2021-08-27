import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-wrapper',
  templateUrl: './loading-wrapper.component.html',
  styleUrls: ['./loading-wrapper.component.css']
})
export class LoadingWrapperComponent implements OnInit {

  _isLoading: boolean | undefined = undefined;

  constructor(
  { }

  ngOnInit() {
  }

}
