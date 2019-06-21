import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';
// import { Observable } from 'rxjs';
import {Router,NavigationEnd, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
	// public status1 : boolean = true;
 //    public status2 : boolean = false;
 //    private status3 : boolean = true;
 emailpattern=/^[a-zA-Z]+[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,5}$/;
     keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault(); 
    }
  }
  keyPress1(event: any) {
    const pattern = /[a-zA-Z ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
    firstFormGroup:FormGroup;
    submitted = false;
    get f(){ return this.firstFormGroup.controls;}
	public practice:any={};
	constructor(private login:LoginService,private router:Router,private _formBuilder:FormBuilder){
}
	ngOnInit() {
		this.firstFormGroup = this._formBuilder.group({
			firstName:['',Validators.required],
			lastName:['',Validators.required],
			Email_address:['',[Validators.required,Validators.pattern(this.emailpattern)]],
			passw:['',Validators.required],
			mobile_no:['',Validators.required],
			// genders:['',Validators.required]
		});
	    console.log("component on in it");
	  	// this.getAllData();

	  }
	//   public allCustomersData:any = [];
	// getAllData(){
	// 	console.log("component functionnn");
	// 	this.login.getAllData1().subscribe( respdata =>{
	// 		this.allCustomersData = respdata;


	// 	})
	// 	error => console.log("errorrr",error); 
	// };


	onClick(pratcie){
			console.log("the data is in data object",pratcie)
		this.submitted = true;
		if (this.firstFormGroup.invalid) {
            return;
        }
	
		console.log("the data is in data object",pratcie)
		this.login.profiledata1(pratcie).subscribe(data => { 
			console.log("ressss",data);
			this.practice={};
			if(data=="success"){
				this.router.navigate(['/login'])
			}
		},
		error => console.log("eeeeeeeeeee",error)
		)
	}
	public practice1:any={};
	onClick1(practice1){
		console.log("ressss");
	this.login.onClick(practice1).subscribe(data => { 
			
		});
}
// editCustomer(){
// 	this.status2 = !this.status2 ;
//     this.status1= !this.status1;  
//     this.status3 = !this.status3;
	
// }
// deleteCustomer(){
// 	this.status2 = !this.status2 ;
//     this.status1= !this.status1;  
//     this.status3 = !this.status3;
	
// }
// save(customer){
// 	console.log("ressssfdfdf",customer);
//   this.status1=!this.status1;  
//   this.status2 = !this.status2;
//   this.status3 = !this.status3
//   this.login.save1(customer).subscribe(data => { 
			
// 		});
// }
// cancel(){
//   this.status1=!this.status1;  
//   this.status2 = !this.status2;
//   this.status3 = !this.status3;
// }
// login2(){


// }
}
