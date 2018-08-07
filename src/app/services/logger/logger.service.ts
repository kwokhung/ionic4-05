import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  logs: Array<string>;

  constructor() {
    this.logs = [];
  }

  addLog(log: string) {
    this.logs.push(log);
  }

  getLogs() {
    return new Observable(observer => {
      observer.next(this.logs);
    })
  }

}
