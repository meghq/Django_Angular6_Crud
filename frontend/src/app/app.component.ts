// import { Component } from '@angular/core';

import { Component, OnInit, Host } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
// import { Observable } from 'rxjs';
import {Router,NavigationEnd, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor(){

	}
	ngOnInit() {

	  }

}
