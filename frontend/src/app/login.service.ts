import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
	private BASE_URL:string = 'http://127.0.0.1:8100';

  constructor(public HttpClient:HttpClient) {
   }
  profiledata1(data):Observable<any>{
  	console.log("###########",data)
  	let url:string = `${this.BASE_URL}/register/`;
    return this.HttpClient.post(url,data);

}
  getAllData1():Observable<any>{
  	let url:string = `${this.BASE_URL}/all/`;
    return this.HttpClient.get(url);
}
  onClick(data){
    console.log("serv",data);
    let url:string = `${this.BASE_URL}/delete/`;
    return this.HttpClient.post(url,data);
  }

   save1(data){
    console.log("serv",data);
    let url:string = `${this.BASE_URL}/save/`;
    return this.HttpClient.post(url,data);
  }

}
