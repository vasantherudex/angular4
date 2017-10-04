import { Component,OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{
  title = 'Vasanth';

  /*constructor(personDetails){
  	personDetails.name="vasanth";
  }*/  
}

class details{
	name:string;
	constructor(name) {
		this.name = 'vasanth';
	}
}
/*interface personDetails{
	name:string;
}*/