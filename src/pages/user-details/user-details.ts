import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the UserDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {

  login: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.login = navParams.get('login');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }



}
