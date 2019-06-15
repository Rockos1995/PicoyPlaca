import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule,} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MatButtonModule,MatGridListModule, MatSnackBarModule, MatFormFieldModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';
import {HomeService} from './home/home.service';
import {GrowlModule} from 'ngx-growl';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,  
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    GrowlModule.forRoot({maxMessages: 10, displayTimeMs: 5000}),
    MatInputModule,
    ReactiveFormsModule, 
HttpModule,

    MatToolbarModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
