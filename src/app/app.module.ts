import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatDialogModule, MatDialog } from '@angular/material';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import {FormsModule} from "@angular/forms";
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';
import { HtpDialogComponent } from './htp-dialog/htp-dialog.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { GamePlayComponent } from './game-play/game-play.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { GameoverComponent } from './gameover/gameover.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    SignupDialogComponent,
    HtpDialogComponent,
    routingComponents,
    HomePageComponent,
    AboutComponent,
    GamePlayComponent,
    EmployeeComponent,
    GameoverComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot() ,
  ],
   entryComponents:[
     LoginDialogComponent,
     SignupDialogComponent,
     HtpDialogComponent,  
     routingComponents, 
     AboutComponent,
     GameoverComponent  
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }



