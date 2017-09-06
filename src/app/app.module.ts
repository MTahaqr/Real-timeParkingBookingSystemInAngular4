import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
//Compnents
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { BookParkingComponent } from './component/book-parking/book-parking.component';
import { ViewBookingComponent } from './component/view-booking/view-booking.component';
import { BahadurabadComponent } from './component/bahadurabad/bahadurabad.component';
import { MilleniumComponent } from './component/millenium/millenium.component';
import { ImtiazComponent } from './component/imtiaz/imtiaz.component';
import { AddLocationComponent } from './component/add-location/add-location.component';
import { ViewAllBookingsComponent } from './component/view-all-bookings/view-all-bookings.component';
import { ViewAllUsersComponent } from './component/view-all-users/view-all-users.component';
import {FeedbackComponent} from './component/feedback/feedback.component';
import { ADFeedbackComponent } from './component/adfeedback/adfeedback.component';




//Services
import {RegisterService} from './Services/register.service';
import {BookService} from './Services/book.service';
import {AdminService} from './Services/admin.service';
//Routing
import {Routing} from './routing/routing';
//BrowserAnimationsModule
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//NoopAnimationsModule
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
//MaterialModules
import {MdToolbarModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import {MdDatepickerModule} from '@angular/material';
import {MdNativeDateModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import {MdTableModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
//Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//hammerjs
import 'hammerjs';
//AngularFire
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';





var config = {
    apiKey: "AIzaSyDppPej7fWhWyMirDR9e4hkGz3KI_eu3dI",
    authDomain: "assignments-e6207.firebaseapp.com",
    databaseURL: "https://assignments-e6207.firebaseio.com",
    projectId: "assignments-e6207",
    storageBucket: "assignments-e6207.appspot.com",
    messagingSenderId: "817554339555"
  };


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    BookParkingComponent,
    ViewBookingComponent,
    BahadurabadComponent,
    MilleniumComponent,
    ImtiazComponent,
    AddLocationComponent,
    ViewAllBookingsComponent,
    ViewAllUsersComponent,
    FeedbackComponent,
    ADFeedbackComponent,

  ],
   imports: [
    BrowserModule,
    //ReactiveFormsModule
    ReactiveFormsModule,
    FormsModule,
    //Routes,
    Routing,
    //BrowserAnimationsModule
    BrowserAnimationsModule,
    //NoopAnimationsModule
    NoopAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule,
    MdTabsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSelectModule,
    MdSidenavModule,
    MdTableModule,
    MdIconModule,
    MdListModule,
    MdCardModule,
    //Bootstrap
    NgbModule.forRoot(),
   
    //Angularfire2
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    
  ],
  providers: [
    //Services
    RegisterService,
    BookService,
    AdminService
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
