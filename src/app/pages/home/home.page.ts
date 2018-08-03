import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { LoggerService } from '../../services/logger/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  logs: Array<string> = [];

  constructor(public alertCtrl: AlertController, public logger: LoggerService) {
    this.logger.addLog('Home');
  }

  ngOnInit() {
    this.getLogs();
  }

  getLogs() {
    this.logger.getLogs().then((data) => {
      this.logs = data.slice(0);
      this.logs = this.logs.reverse();
    });
  }

  async openLogDetails(log) {
    const alert = await this.alertCtrl.create({
      header: 'Log Details',
      message: JSON.stringify(log),
      buttons: ['Close']
    });

    await alert.present();
  }

}
