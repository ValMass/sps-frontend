import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/services';
import { first } from 'rxjs/operators';
import { Response } from '@app/models/response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    /*const user = this.authenticationService.login(this.f.username.value, this.f.password.value, 'app', 'app', 'password');
    user.subscribe(x => console.log('first: ' + JSON.stringify(x)));
*/
    const observer = {
    next: x => {
      console.log('Observer got a next value: ' + JSON.stringify(x));
      localStorage.setItem('userResponse', JSON.stringify(x));

  },
    error: erriks => console.log('Observer got an error: ' + JSON.stringify(erriks)),
    complete: () => console.log('Observer got a complete notification'),
  };

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value, 'app', 'app', 'password')
      .pipe(first())
      .subscribe(
        ( data: any ) => {

          this.authenticationService.retriveUser(this.f.username.value)
            .subscribe( observer );

          this.router.navigate(['/HomeComponent']);


          localStorage.setItem('loginresposnseout', JSON.stringify(data));
        },
        ( error: string ) => {
          this.error = error;
          this.loading = false;
        });
  }
}
