import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  constructor(public alertCtrl: AlertController/*, public barcodeScanner: BarcodeScanner*/) { }

  ngOnInit() {
  }

  /*scan() {
    this.barcodeScanner.scan().then(async (barcodeData) => {
      (await this.alertCtrl.create({
        header: 'Scan Results',
        subHeader: (typeof barcodeData === 'string' ? barcodeData : JSON.stringify(barcodeData)),
        buttons: ['Close']
      })).present();
    }, async (err) => {
      (await this.alertCtrl.create({
        header: 'Attention!',
        subHeader: (typeof err === 'string' ? err : JSON.stringify(err))
      })).present();
    });
  }*/

}
