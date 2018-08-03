import { Component, OnInit } from '@angular/core';

//import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'app-bluetooth',
  templateUrl: './bluetooth.page.html',
  styleUrls: ['./bluetooth.page.scss'],
})
export class BluetoothPage implements OnInit {

  devices: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
