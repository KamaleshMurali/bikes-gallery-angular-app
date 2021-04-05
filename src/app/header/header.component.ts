import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { User } from '../shared/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(
    private router: Router,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('userInfo'));
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

  login() {
    const dialogRef = this.dialog.open(LoginComponent, {width: '65%', height: '70%'});
    dialogRef.afterClosed().subscribe((user: User) => {
      this.user = user;
    })
  }

  logout() {
    sessionStorage.clear();
    this.user = null;
  }

}
