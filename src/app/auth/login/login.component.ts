import { Component }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
import { AuthService }      from '../auth.service';
import { Globals } from '../../globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  private userName: string;
  private password: string;

  constructor(public authService: AuthService, public router: Router, private globals: Globals) {
  }

  
  login() {
    
    this.authService.login(this.userName,this.password).subscribe(() => {
    alert("logged in "+this.authService.isLoggedIn);
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
        this.globals.authenticatedUser = this.authService.getAuthenticatedUser();
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
