import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type ColorType = { [key in 'barColor' | 'highlightedBarColor']: string };
export type InputArrayType = 'randomSequentialArray' | 'randomArray' | 'userInputArray';
export type InputArrayTypeObject = { [key in InputArrayType]: string };
export const possibleInputArrayTypes: InputArrayTypeObject = {
  'randomSequentialArray': 'Random sequential array (default)',
  'randomArray': 'Random array',
  'userInputArray': 'User input array'
};
export type NumberOfSortsPerRow = 1 | 2 | 3 | 4;

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private _delay: number = 20;
  private _inputArray: number[] = [];
  private _inputArrayLength: number = 40;
  private _inputArrayType: InputArrayType = 'randomSequentialArray';
  private _selectedSortingFunctionKeys: Subject<string[]> = new Subject();
  private _playSortingFunction: Subject<boolean> = new Subject();
  private _colors: ColorType = { barColor: '#71a6d2', highlightedBarColor: 'LightYellow'};
  private _sortsPerRow: NumberOfSortsPerRow = 2;

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

  get inputArrayType(): InputArrayType {
    return this._inputArrayType;
  }
  set inputArrayType(inputArrayType: InputArrayType) {
    this._inputArrayType = inputArrayType;
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

  get colors(): ColorType {
    return this._colors;
  }
  set colors(colors: ColorType) {
    this._colors = colors;
  }

  get sortsPerRow(): NumberOfSortsPerRow {
    return this._sortsPerRow;
  }
  set sortsPerRow(sortsPerRow: NumberOfSortsPerRow) {
    this._sortsPerRow = sortsPerRow;
  }
}
