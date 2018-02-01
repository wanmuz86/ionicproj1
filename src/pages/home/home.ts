import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetailPage} from '../detail/detail';
import {AddPage} from '../add/add';
import {UserProvider} from '../../providers/user/user'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


users = []
  
  constructor(public navCtrl: NavController, 
    public userProv : UserProvider) {
    this.users = this.userProv.getAllUser();

  }
  openDetail(user){
	this.navCtrl.push(DetailPage, {user:user});
}
openAdd(){
  this.navCtrl.push(AddPage);
}

delete(user){
  this.userProv.deleteUser(user);
}
}
