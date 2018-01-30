import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { FootComponent } from './foot.component'

@NgModule({
  declarations: [
    AppComponent, FootComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent, FootComponent
  ]
})
export class AppModule { }
