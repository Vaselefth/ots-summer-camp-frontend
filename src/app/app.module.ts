import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TransactorFormComponent } from './transactor-form/transactor-form.component';
import { TransactorFormService } from './transactor-form/transactor-form.service';

@NgModule({
  declarations: [
    AppComponent,
    TransactorFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TransactorFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
