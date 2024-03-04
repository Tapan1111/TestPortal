import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private router: Router) { }

  logout() {
    // Add your logout logic here
    // For example, clearing authentication token, session, or user data
    // Then navigate to the login page
    
    this.router.navigate(['']);
    alert("Logged out successfully")
  }

}
