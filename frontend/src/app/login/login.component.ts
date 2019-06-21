import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginService } from '../login.service';
// import { Observable } from 'rxjs';
import {Router,NavigationEnd, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public status1 : boolean = true;
    public status2 : boolean = false;
    private status3 : boolean = true;
     p: number = 1;
     itemsinpage:any;
     firstname:any;
    // collection: any[] = someArrayOfThings;

  constructor(private login:LoginService,private router:Router) { }

  ngOnInit() {
    this.getAllData();
  }
   public allCustomersData:any = [];
  getAllData(){
    console.log("component functionnn");
    this.login.getAllData1().subscribe( respdata =>{
      this.allCustomersData = respdata;
      console.log("component functionnn",respdata);


    })
    error => console.log("errorrr",error); 
  }

  editCustomer(){
  this.status2 = !this.status2 ;
    this.status1= !this.status1;  
    this.status3 = !this.status3;
  
}
deleteCustomer(data){
  // let obj=data.mobile
  this.login.onClick(data).subscribe(data =>{
    if(data=="deleted successfully"){
      this.getAllData();
    }
  })
  
}
save(customer){
  console.log("ressssfdfdf",customer);
  this.status1=!this.status1;  
  this.status2 = !this.status2;
  this.status3 = !this.status3
  this.login.save1(customer).subscribe(data => { 
      console.log("data")
    });
}
cancel(){
  this.status1=!this.status1;  
  this.status2 = !this.status2;
  this.status3 = !this.status3;
}
 search(){
   if(this.firstname != ""){
     this.allCustomersData=this.allCustomersData.filter(res=>{
       return res.firstname.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
     });
   }else if(this.firstname==""){
     this.ngOnInit();
   }
 }
}
