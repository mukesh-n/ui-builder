import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';

/* External Libraries */
import { AngularSlickgridModule } from 'angular-slickgrid';
import { ToastrModule } from 'ngx-toastr';

/* User Defined */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* dynamic added for Angular Slickgrid */
// @dynamic
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    /* angular defaults */
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    FormsModule, 
    ReactiveFormsModule,
    ScrollingModule,
    /* external */
    AngularSlickgridModule.forRoot(),
    ToastrModule.forRoot(),
    /* user defined */
    CoreModule.forRoot(),
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
