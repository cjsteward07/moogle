import { EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {data} from 'src/app/models/theater-data.interface';
import {theater} from 'src/app/models/theater.interface';
import { User } from './models/user.interface';
@Injectable({
  providedIn: 'root'
})
export class FlixterApiService {
  // theaterUri:string = 'https://flixster.p.rapidapi.com/theaters/list?zipCode=49519&radius=50';
  // defaultHeaders =  {
	// 	'X-RapidAPI-Key': '8a1920a098mshfc90a10a8464b5ap1cf15ejsndf3b1770a944',
	// 	'X-RapidAPI-Host': 'flixster.p.rapidapi.com'
	// }
  serverUri:string = 'https://localhost:7239/api/User/RegisterUser';
  baseUri:string = 'https://localhost:7239/api/';
  user:any;
  theaters:any;
  @Output()registerEvent:EventEmitter<User> = new EventEmitter();
  @Output()theatersEvent:EventEmitter<data> = new EventEmitter();
  constructor(private http:HttpClient) {

   }

   registerNewUser(user:User) {
      this.http.post<User>(this.serverUri, user)
      .subscribe((x)=>{
        if(x){
          this.user = x
        }
        return this.registerEvent.emit(this.user)
      })
   }
   userLogin(username:string, password:string){
    let uriEnd = `User/GetUser/${username}/${password}`;
    this.http.get<{}>(this.baseUri + uriEnd).subscribe(
      (x)=>{
        if(x) {
          this.user = x;
          this.registerEvent.emit(this.user);
          return this.getTheaters(this.user.userName, this.user.password)
        }
      }
    )
   }
   getTheaters(username:string, password:string) {
    
    let uriEnd = `User/GetTheaters/${username}/${password}`;
    this.http.get<data>(this.baseUri + uriEnd).subscribe(
      (x)=>{
        if(x){
          this.theaters = x;
          return this.theatersEvent.emit(this.theaters);
        }
      }
    )
   }
  //  getLocalTheaterData() {
  //   return this.http.get<data>(this.theaterUri, {
  //     "headers" : this.defaultHeaders
  //   }, )
  //  }
}
