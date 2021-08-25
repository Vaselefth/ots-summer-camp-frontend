import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TransactorFormComponent } from './transactor-form/transactor-form.component';
import { TransactorFormService } from './transactor-form/transactor-form.service';
import { TransactorShowComponent } from './transactor-show/transactor-show.component';
import { TransactorShowService } from './transactor-show/transactor-show.service';

@NgModule({
  declarations: [
    AppComponent,
    TransactorFormComponent,
    TransactorShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [TransactorFormService,TransactorShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
