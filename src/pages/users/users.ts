import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { User } from '../../models/user';
import { GithubUsers } from  '../../providers/github-users';


/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  users: User[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsers, public loading: LoadingController) {
    let loader = this.loading.create({
      content: 'Please wait...',
      spinner: 'crescent'
    });
    loader.present();
    githubUsers.load().subscribe(users => {
      this.users = users;
      console.log(this.users);
      loader.dismiss();
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

}
