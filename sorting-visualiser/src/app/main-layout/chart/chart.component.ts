import { SettingsService } from '../services/settings.service';
import { ResultsService, ResultsObjectClass } from '../services/results.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges {

  constructor(
    private settingsService: SettingsService,
    private resultsService: ResultsService)
  { }

  @Input() componentWidth: number = 0;
  @Input() componentHeight: number = 0;
  @Input() sortingFunction: Function = Function();
  @Input() delay: number = 0;
  
  delay: number = this.settingsService.delay;
  inputArray: number[] = [...this.settingsService.inputArray];
  inputArrayLength: number = this.settingsService.inputArrayLength;
  inputArrayMaximum: number = Math.max(...this.settingsService.inputArray);
  highlightedIndexArray: number[] = [];

  playSortingSubscription: Subscription =  new Subscription();

  async ngOnInit() {
    this.playSortingSubscription = this.settingsService.playSortingFunction.subscribe(async () => {
      this.reloadSettings();

      const t0 = performance.now();
      const result: ResultsObjectClass = await this.sortingFunction(this.inputArray, this.highlightedIndexArray, this.delay);
      const t1 = performance.now();

      result.functionName = this.sortingFunctionName;
      result.totalExecutionTime = Math.round((t1 - t0) * 100) / 100;
      result.delayUsed = this.delay;

      this.resultsService.resultsPush = result;
      this.resultsService.resultsSubjectNext = true;
    });
  }

  reloadSettings() {
    this.delay = this.settingsService.delay;
    this.inputArray = [...this.settingsService.inputArray];
    this.inputArrayLength = this.settingsService.inputArrayLength;
    this.inputArrayMaximum = Math.max(...this.settingsService.inputArray);
    this.highlightedIndexArray = [];
  }

}
