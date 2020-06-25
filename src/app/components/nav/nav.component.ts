import { Component, OnInit } from '@angular/core';
import { User } from '@app/models';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/services';
// import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // faUser = faUser;
  // faSignOutAlt = faSignOutAlt;

  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    // this.currentUser.isAdmin = false;
  }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
