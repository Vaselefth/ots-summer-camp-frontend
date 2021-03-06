import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Transactor } from '../transactor';
import { TransactorFormService } from './transactor-form.service';

@Component({
  selector: 'app-transactor-form',
  templateUrl: './transactor-form.component.html',
  styleUrls: ['./transactor-form.component.css']
})
export class TransactorFormComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;

  cities = ['Αθήνα', 'Θεσσαλονίκη', 'Πάτρα','Ηράκλειο','Λάρισα','Βόλος','Ιωάννινα','Τρίκαλα','Χαλκίδα','Σέρρες'];

  constructor(private transactorFormService: TransactorFormService, 
    private authService: AuthService) { }

  ngOnInit(): void {
  } 

  numberOnly(event): boolean {
    return this.transactorFormService.numberOnlyService(event);
  }

  postTransactor(postData: {transactor: Transactor}) {
    this.transactorFormService.onCreateTransactor(postData);
  }

  onSubmit() {
    
    let transactor = this.signupForm.value.userData;
    
    //convert tin string to number
    transactor.tin = Number(transactor.tin);    
    transactor.transactorType = Number(transactor.transactorType);
    transactor.abroad = Number(transactor.abroad);
    //true = 1 
    console.log(transactor);
    this.postTransactor(transactor);
  }

  onLogout(){
    this.authService.logout();
  }

}
