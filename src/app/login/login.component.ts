
import { Component, Inject, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from '../shared/model/user.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password =  new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]);
  username = new FormControl('', [Validators.required]);

  usersDB: User[] = [
    {emailId : "abc@media.com", password: "abc123", name: "tom"},
    {emailId : "def@media.com", password: "def123", name: "dick"},
    {emailId : "def@media.com", password: "def123", name: "dick"},
    {emailId : "def@media.com", password: "def123", name: "dick"},
    {emailId : "def@media.com", password: "def123", name: "dick"},
    {emailId : "def@media.com", password: "def123", name: "dick"}
  ]

  hide = true;

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getUsernameErrorMessage() {}

  getPswdErrorMessage() {
    // if (this.password.hasError('required')) {
    //   return 'You must enter a value';
    // }
    if (this.password.hasError('maxLength')) {
      return 'Password length exceeds maximum limit';
    }
    if (this.password.hasError('minLength')) {
      return 'Password is too short';
    }
  }

  login() {
    let currentUser: User = {
      emailId: this.email.value,
      password: this.password.value,
      name: this.username.value
    }

    let userIndex = this.usersDB.findIndex(user => user.emailId === currentUser.emailId && user.password === currentUser.password);
    if (userIndex >= 0) {
      sessionStorage.setItem('userInfo', JSON.stringify({emailId: currentUser.emailId, name: currentUser.name}));
      this.dialogRef.close(currentUser);
    }
  }

  cancel() {
    this.email.reset();
    this.password.reset();
    this.dialogRef.close();
  }

}
