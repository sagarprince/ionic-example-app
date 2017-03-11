import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { User } from '../../models/user';
import { GithubUsers } from '../../providers/github-users';

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
  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loading: LoadingController, private githubUsers: GithubUsers) {
    this.login = navParams.get('login');
    let loader = this.loading.create({
      content: 'Please wait...',
      spinner: 'crescent'
    });
    loader.present();
    githubUsers.loadDetails(this.login).subscribe(user => {
      this.user = user;
      loader.dismiss();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }



}
