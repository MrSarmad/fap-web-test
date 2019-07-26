import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsearchComponent } from './searches/detailsearch/detailsearch.component';
import { QuicknamesearchComponent } from './searches/quicknamesearch/quicknamesearch.component';
import { MyfavoritesComponent } from './myfavorites/myfavorites.component';
import { MasterComponent } from './master/master.component';
//import { LeftnavComponent } from './navigations/leftnav/leftnav.component';
//import { TopnavComponent } from './navigations/topnav/topnav.component';

const routes: Routes = [
    { path: '', component: MasterComponent },
    { path: 'master', component: MasterComponent },
    { path: 'searches/detailsearch', component: DetailsearchComponent },
    { path: 'searches/quicknamesearch', component: QuicknamesearchComponent },
    { path: 'myfavorites', component: MyfavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
