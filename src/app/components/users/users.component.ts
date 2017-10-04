import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  constructor() { 
  	//this.name = "kumar";
  }

  ngOnInit() {
  	this.name = "vasanth";
  	this.age = 23;
  	this.email = "vasantha@gmail.com";
  	this.address = {
  		state:"AndhraPradesh",
  		city:"Visakhapatnam"
  	}
  	this.hobbies = ["Playing Cricket","Listen to Music","Swimming"];
  }

}
interface Address{
	state:string;
	city:string;
}