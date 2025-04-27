import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { AuthenticatedUser } from '../AuthenticatedUser';
import { DUMMY_AUTH_USER } from './DUMMY_AUTH_USER';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _serviceurl='/token/';
  constructor(private _http: HttpClient){}
  
  isLoggedIn = false;
  authenticatedUser: AuthenticatedUser;
  

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  
  
  login(userName : string, password : string):Observable<boolean> {
      this._http.request('POST',environment.baseServiceUrl+this._serviceurl+'?userName='+userName+'&password='+password, {responseType: 'text'})
      	.subscribe(response => {
              var token = JSON.stringify(response).replace(/['"]+/g, ''); 
              if(token == '')
              {
              	 this.isLoggedIn = false;
                 this.authenticatedUser = null;
              }
              else
              {
              	 this.isLoggedIn=true;
		      DUMMY_AUTH_USER.token = token;   // update value field here.
		      DUMMY_AUTH_USER.userName=userName;
		      this.authenticatedUser = DUMMY_AUTH_USER;
		      //alert(environment.baseServiceUrl+this._serviceurl+DUMMY_AUTH_USER.token);
		     // this._http.get(environment.baseServiceUrl+this._serviceurl+DUMMY_AUTH_USER.token)
		      //	.subscribe((res: Response) => JSON.stringify(res))
			//        .map((json: Object) => {
			//            AuthenticatedUser user = new AuthenticatedUser().fromJSON(json);
			//            alert(user.displayName);
			//            DUMMY_AUTH_USER.displayName = user.displayName;
			//	    DUMMY_AUTH_USER.licensedClientId=user.licensedclientId;
			//	    this.authenticatedUser = DUMMY_AUTH_USER;
        		//});
			//    .subscribe(response => {
			//    alert(JSON.stringify(response));
			//		  DUMMY_AUTH_USER.displayName = <AuthenicatedUser>response.displayName;
			//		  DUMMY_AUTH_USER.licensedClientId=<AuthenicatedUser>response.licensedclientId;
			//		  this.authenticatedUser = DUMMY_AUTH_USER;
			//});
    	      }
    	      
    	});
    	this.isLoggedIn=true;
    	this.authenticatedUser = DUMMY_AUTH_USER;
    	return of(this.isLoggedIn);
    	//return Observable.of(this.isLoggedIn).delay(1000).do(val => val='1234');
      
      
  }

  logout(): void {
    this.isLoggedIn = false;
  }
  getAuthenticatedUser(): AuthenticatedUser
  {
  	return this.authenticatedUser;
  }
}
