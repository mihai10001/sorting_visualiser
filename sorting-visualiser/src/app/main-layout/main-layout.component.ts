import { OnInit, AfterViewInit, Component, HostListener, ChangeDetectorRef } from '@angular/core';
import { ViewChildren, ElementRef, QueryList } from '@angular/core';
import { SortingFunctions, SortingFunctionObjectType } from '../sorting-functions';
import { SettingsService, NumberOfSortsPerRow } from './services/settings.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, AfterViewInit {

  @ViewChildren('chartCanvases', {read: ElementRef})
  chartCanvases!: QueryList<ElementRef>;

  chartCanvasWidth: number = 0;
  chartCanvasHeight: number = 200;
  sortingFunctions: SortingFunctionObjectType = SortingFunctions;
  selectedSortingFunctionKeys: string[] = [];
  sortsPerRow: NumberOfSortsPerRow =  this.settingsService.sortsPerRow;


  constructor(
    private changeDetector: ChangeDetectorRef,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.settingsService.selectedSortingFunctionKeys.subscribe(keys =>
      this.selectedSortingFunctionKeys = keys
    );
    this.settingsService.playSortingFunction.subscribe(() => {
      this.sortsPerRow = this.settingsService.sortsPerRow;
      this.detectChanges();
      this.refreshCanvas();
    });
  }

  ngAfterViewInit() {
    this.chartCanvases.changes.subscribe(() => { this.refreshCanvas(); this.detectChanges(); } );
  }

  @HostListener('window:resize')
  onResize() {
    this.refreshCanvas();
  }

  refreshCanvas() {
    this.chartCanvasWidth = this.chartCanvases.length > 0 ? this.chartCanvases.first.nativeElement.offsetWidth - 10 : 0;
  }

  detectChanges() {
    this.changeDetector.detectChanges();
  }
}
