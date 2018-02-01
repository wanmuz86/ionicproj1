
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {


users = [
  {
  	name:"Najib Razak",
  	email:"najib@1malaysia.gov.my",
  	url:"http://www.loyarburok.com/wp-content/uploads/2013/05/Why-support-najib.jpg"
  },
  {
  	name:"Mahathir Mohamad",
  	email:"mahathir@1malaysia.gov.my",
  	url:"https://www.thefamouspeople.com/profiles/images/mahathir-mohamad-3.jpg"
  },
  {
  	name:"Anwar Ibrahim",
  	email:"anwar@1malaysia.gov.my",
  	url:"https://cdn01.vulcanpost.com/wp-uploads/2015/02/sentence-anwar.jpg"
  }
  ]

  constructor() {
    console.log('Hello UserProvider Provider');
  }

  getAllUser(){
  	return this.users
  }

  addUser(user){
  	this.users.push(user);
  }

  deleteUser(user){

  	for ( var i=0; i< this.users.length; i++){

  		if (this.users[i].name == user.name){
  		
  			this.users.splice(i,1);
  		

  		}
  	}
  }

}
