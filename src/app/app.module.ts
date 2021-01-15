import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ReadListComponent } from './awesome/read-list/read-list.component';
import { UnreadLisstComponent } from './awesome/unread-lisst/unread-lisst.component';
import { ReadAddComponent } from './awesome/read-add/read-add.component';
import { AwesomeComponent } from './awesome/awesome.component';
import { UpdateComponent } from './awesome/update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    ReadListComponent,
    UnreadLisstComponent,
    ReadAddComponent,
    AwesomeComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
