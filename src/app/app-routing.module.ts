import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {BoardComponent} from './board/board.component';
import {GrpdComponent} from './grpd/grpd.component';
import {MembershipComponent} from './membership/membership.component';
import {SupportComponent} from './support/support.component';
import {TermsComponent} from './terms/terms.component';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'board', component: BoardComponent},
  {path: 'grpd', component: GrpdComponent},
  {path: 'membership', component: MembershipComponent},
  {path: 'support', component: SupportComponent},
  {path: 'terms', component: TermsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BoardComponent, GrpdComponent, MainComponent, MembershipComponent, SupportComponent, TermsComponent]
