import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { UsersPage } from '../users/users';
import { ReposPage } from '../repos/repos';
import { OrganisationsPage } from '../organisations/organisations';

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = UsersPage;
  tab2Root: any = ReposPage;
  tab3Root: any = OrganisationsPage;

  constructor() {

  }
}
