import { Component } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
//Components
import {SignUpComponent} from '../component/sign-up/sign-up.component';
import {SignInComponent} from '../component/sign-in/sign-in.component';
import {AdminDashboardComponent} from '../component/admin-dashboard/admin-dashboard.component';
import {UserDashboardComponent} from '../component/user-dashboard/user-dashboard.component';
import {BookParkingComponent} from '../component/book-parking/book-parking.component';
import {ViewBookingComponent} from '../component/view-booking/view-booking.component';
import {BahadurabadComponent} from '../component/bahadurabad/bahadurabad.component';
import {MilleniumComponent} from '../component/millenium/millenium.component';
import {ImtiazComponent} from '../component/imtiaz/imtiaz.component';
import {AddLocationComponent} from '../component/add-location/add-location.component';
import {ViewAllBookingsComponent} from '../component/view-all-bookings/view-all-bookings.component';
import {ViewAllUsersComponent} from '../component/view-all-users/view-all-users.component';
import {FeedbackComponent} from '../component/feedback/feedback.component';
import {ADFeedbackComponent} from '../component/adfeedback/adfeedback.component';

export const routes:Routes=[
    {path:'SignUp',component:SignUpComponent},
    {path:'SignIn',component:SignInComponent},
    {path: 'AdminDashBoard',component:AdminDashboardComponent},
    {path:'BookParking', component:BookParkingComponent},
    {path:'ViewBooking',component:ViewBookingComponent},
    {path: 'UserDashBoard',component:UserDashboardComponent,
    children:[
        {path:'BookParking', component:BookParkingComponent},
        {path:'ViewBooking',component:ViewBookingComponent},
    ]
},
    {path:'Bahadurabad',component:BahadurabadComponent},
    {path:'ViewAllBookings',component:ViewAllBookingsComponent},
    {path:'ViewAllUsers',component:ViewAllUsersComponent},    
    {path:'ViewAllUsers',component:ViewAllUsersComponent},    
    {path:'Millenium',component:MilleniumComponent},
    {path:'Imtiaz',component:ImtiazComponent},
    {path:'AddLocation',component:AddLocationComponent},
    {path:'Feedback',component:FeedbackComponent},
    {path:'ADFeedback',component:ADFeedbackComponent},
    
    

    

]
export const Routing=RouterModule.forRoot(routes);