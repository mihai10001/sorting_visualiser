import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class ResultsObjectClass {
  functionName: string = '';
  numberOfComparisons: number = 0;
  numberOfSwaps: number = 0;
  totalExecutionTime: number = 0;
  delayUsed: number = 0;
}


@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private _results: ResultsObjectClass[] = [];
  private _resultsSubject: Subject<boolean> = new Subject();

  constructor() { }

  get resultsSubject(): Subject<boolean> {
    return this._resultsSubject;
  }
  set resultsSubjectNext(next: boolean) {
    this._resultsSubject.next(next);
  }


  get results(): ResultsObjectClass[] {
    return this._results;
  }
  set resultsPush(result: ResultsObjectClass) {
    this._results.push(result);
  }
  set resultsSetNull(nullArray: []) {
    this._results = nullArray;
  }
}
