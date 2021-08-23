import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private _delay: number = 20;
  private _inputArray: number[] = [];
  private _inputArrayLength: number = 40;
  private _selectedSortingFunctionKeys: Subject<string[]> = new Subject();
  private _playSortingFunction: Subject<boolean> = new Subject();

  constructor() { }

  get delay(): number {
    return this._delay;
  }
  set delay(delay: number) {
    this._delay = delay;
  }

  get inputArray(): number[] {
    return this._inputArray;
  }
  set inputArray(inputArray: number[]) {
    this._inputArray = inputArray;
  }

  get inputArrayLength(): number {
    return this._inputArrayLength;
  }
  set inputArrayLength(inputArrayLength: number) {
    this._inputArrayLength = inputArrayLength;
  }

  get selectedSortingFunctionKeys(): Subject<string[]> {
    return this._selectedSortingFunctionKeys;
  }
  set selectedSortingFunctionKeysValue(selectedSortingFunctionKeys: string[]) {
    this._selectedSortingFunctionKeys.next(selectedSortingFunctionKeys);
  }

  get playSortingFunction(): Subject<boolean> {
    return this._playSortingFunction;
  }
  set playSortingFunctionValue(play: boolean) {
    this._playSortingFunction.next(play);
  }
}
