import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  private _$changeColor: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get getChangeColor() {
    return this._$changeColor.asObservable();
  }
  setChangeColor(value: boolean) {
    this._$changeColor.next(value);
  }
}
