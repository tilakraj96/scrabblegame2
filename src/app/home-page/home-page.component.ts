import { Component, OnInit } from '@angular/core';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { MatDialog } from '@angular/material';
import { SignupDialogComponent } from '../signup-dialog/signup-dialog.component';
import { HtpDialogComponent } from '../htp-dialog/htp-dialog.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  opened=false;
  ngOnInit() {
  }
  onLogin(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');      
    });
  }

  onSignup(): void {
    const dialogRef = this.dialog.open(SignupDialogComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  onHtp(): void {
    const dialogRef = this.dialog.open(HtpDialogComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  onAbout(): void {
    const dialogRef = this.dialog.open(AboutComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}
