import { OnInit, AfterViewInit, Component, HostListener, ChangeDetectorRef } from '@angular/core';
import { ViewChildren, ElementRef, QueryList } from '@angular/core';
import { SortingFunctions, SortingFunctionObjectType } from '../sorting-functions';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, AfterViewInit {

  @ViewChildren('chartCanvases', {read: ElementRef})
  chartCanvases!: QueryList<ElementRef>;

  chartCanvasWidth: number = 0;
  chartCanvasHeight: number = 0;
  sortingFunctions: { [index: string]: Function } = SortingFunctions;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private settingsService: SettingsService
  ) { }

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() { }

  ngAfterViewInit() {
    this.chartCanvases.changes.subscribe(() => this.refreshCanvas());
  }

  @HostListener('window:resize')
  onResize() {
    this.refreshCanvas();
  }

  refreshCanvas() {
    this.chartCanvasWidth = this.chartCanvases.length > 0 ? this.chartCanvases.first.nativeElement.offsetWidth - 10 : 0;
    this.changeDetector.detectChanges();
  }
}
