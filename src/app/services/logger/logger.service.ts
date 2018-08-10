import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  //logs: Array<string> = [];
  logs: string[] = [];

  constructor() { }

  addLog(log: string) {
    this.logs.push(log);
  }

  /*getLogs() {
    return new Observable(observer => {
      observer.next(this.logs);
    })
  }*/
  getLogs(): Observable<string[]> {
    return of(this.logs);
  }

}
