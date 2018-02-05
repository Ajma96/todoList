import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { TaskComponent } from './task.component'
import { FootComponent } from './foot.component'

@NgModule({
  declarations: [
    AppComponent, TaskComponent, FootComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent, TaskComponent, FootComponent
  ]
})
export class AppModule { }
