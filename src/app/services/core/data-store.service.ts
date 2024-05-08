import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { }

  private requestStore = new BehaviorSubject<any>(null)
  currentRequest = this.requestStore.asObservable();
  changeProfile(review: any){
    this.requestStore.next(review);
  }
}
