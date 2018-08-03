import { Injectable } from '@angular/core';

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
    return Promise.resolve(this.logs);
  }

}
