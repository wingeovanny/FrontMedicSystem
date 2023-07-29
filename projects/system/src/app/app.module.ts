import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LiskTaskComponent } from './components/lisk-task/lisk-task.component';
import { ResponsibleComponent } from './components/responsible/responsible.component';
import { ShowTimeComponent } from './components/show-time/show-time.component';
import { FormTaskComponent } from './components/form-task/form-task.component';

@NgModule({
  declarations: [AppComponent, LiskTaskComponent, ResponsibleComponent, ShowTimeComponent, FormTaskComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
