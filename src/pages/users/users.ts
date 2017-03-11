import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  private githubUsers: GithubUsers, 
  public loading: LoadingController,
  public alertCtrl: AlertController) {
    let loader = this.showLoader();
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

    if (searchTerm !== '' && searchTerm.length > 3) {
      // this.users = this.users.filter((v) => {        
      //   let login = v.login.toLowerCase();
      //   if (login.indexOf(searchTerm) > -1) {
      //     return true;
      //   }

      //   return false;
      // });
      let loader = this.showLoader();
      this.githubUsers.searchUsers(searchTerm).subscribe(users => {
        this.users = users;
        loader.dismiss();
      }, error => {
        this.showAlertMessage('Error', 'Something went wrong, please try again later');
        loader.dismiss();
      });
    } else {
      this.users = this.originalUsers;
    }
  }

  showLoader() {
    let loader = this.loading.create({
      content: 'Please wait...',
      spinner: 'crescent'
    });
    loader.present();
    return loader;
  }

  showAlertMessage(title: string, message: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
