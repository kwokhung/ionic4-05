import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SimplyPreventGuard implements CanActivate {

  constructor(private alertCtrl: AlertController) { }

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    (await this.alertCtrl.create({
      header: 'Attention!',
      subHeader: 'Under construction.'
    })).present();

    return false;
  }
}
