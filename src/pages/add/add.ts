import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from '../../providers/user/user'
/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

user = {
	name:'',
	email:'',
	url:''
}
  constructor(public navCtrl: NavController, public navParams: NavParams
  , public userProv:UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }
  saveUser(){
  	this.userProv.addUser(this.user);
  	this.navCtrl.pop();
  }

  deleteUser(){

  }

  editUser(){
  	
  }

}
