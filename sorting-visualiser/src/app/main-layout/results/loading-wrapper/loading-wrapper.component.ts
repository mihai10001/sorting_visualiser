import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-loading-wrapper',
  templateUrl: './loading-wrapper.component.html',
  styleUrls: ['./loading-wrapper.component.css']
})
export class LoadingWrapperComponent implements OnInit {

  _isLoading: boolean | undefined = undefined;

  constructor(
    private settingsService: SettingsService,
    private resultsService: ResultsService)
  { }

  ngOnInit() {
    this.settingsService.playSortingFunction.subscribe(() => this._isLoading = true);
    this.resultsService.resultsSubject.subscribe(() => this._isLoading = (this.resultsService.results.length > 0) ? true : false);
  }

}
