import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ReadListComponent} from './awesome/read-list/read-list.component';
import {UnreadLisstComponent} from './awesome/unread-lisst/unread-lisst.component';
import {ReadAddComponent} from './awesome/read-add/read-add.component';
import {AwesomeComponent} from './awesome/awesome.component';
import {UpdateComponent} from './awesome/update/update.component';

const routes: Routes = [
  {
    path: '',
    component: AwesomeComponent
  },
  {
    path: 'read-list',
    component: ReadListComponent
  },
  {
    path: 'read-add',
    component: ReadAddComponent
  },
  {
    path: 'unread-list',
    component: UnreadLisstComponent
  },
  {
    path: 'update',
      component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
