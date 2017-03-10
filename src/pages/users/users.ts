import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { User } from '../../models/user';
import { GithubUsers } from  '../../providers/github-users';

import { UserDetailsPage } from '../user-details/user-details';

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
  originalUsers: User[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsers, public loading: LoadingController) {
    let loader = this.loading.create({
      content: 'Please wait...',
      spinner: 'crescent'
    });
    loader.present();
    githubUsers.load().subscribe(users => {
      this.users = users;
      this.originalUsers = users;
      console.log(this.users);
      loader.dismiss();
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  goToDetails(login: string) {
    let pageObject = {
      login: login
    };
    this.navCtrl.push(UserDetailsPage, pageObject);
  }

  search(searchEvent) {
    let searchTerm = searchEvent.target.value;    
    searchTerm = searchTerm.trim().toLowerCase();

    if (searchTerm !== '' && searchTerm.length > 2) {
      this.users = this.users.filter((v) => {        
        let login = v.login.toLowerCase();
        if (login.indexOf(searchTerm) > -1) {
          return true;
        }

        return false;
      });
    } else {
      this.users = this.originalUsers;
    }
  }

}
