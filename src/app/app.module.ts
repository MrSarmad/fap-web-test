import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DetailsearchComponent } from './searches/detailsearch/detailsearch.component';
import { QuicknamesearchComponent } from './searches/quicknamesearch/quicknamesearch.component';
import { MyfavoritesComponent } from './myfavorites/myfavorites.component';
import { MasterComponent } from './master/master.component';
import { LeftnavComponent } from './navigations/leftnav/leftnav.component';
import { TopnavComponent } from './navigations/topnav/topnav.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsearchComponent,
    QuicknamesearchComponent,
    MyfavoritesComponent,
    MasterComponent,
    LeftnavComponent,
    TopnavComponent
  ],
  imports: [
      AppRoutingModule,
      MatSelectModule,
      BrowserModule,
      BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
