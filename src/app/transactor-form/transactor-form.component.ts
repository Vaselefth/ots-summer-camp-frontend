import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Transactor } from '../transactor';

@Component({
  selector: 'app-transactor-form',
  templateUrl: './transactor-form.component.html',
  styleUrls: ['./transactor-form.component.css']
})
export class TransactorFormComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;

  cities = ['Αθήνα', 'Θεσσαλονίκη', 'Πάτρα','Ηράκλειο','Λάρισα','Βόλος','Ιωάννινα','Τρίκαλα','Χαλκίδα','Σέρρες'];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  onCreatePost(postData: {transactor: Transactor}) {
    this.http.post<Transactor>(
      'http://localhost:8080/api/transactors', 
      postData
      ).subscribe(responseData => {
          console.log(responseData);
      });
  }

  onSubmit() {
    
    let transactor = this.signupForm.value.userData;
    
    //convert tin string to number
    transactor.tin = Number(transactor.tin);    
    transactor.transactorType = Number(transactor.transactorType);
    transactor.abroad = Number(transactor.abroad);
    //true = 1 
    console.log(transactor);
    this.onCreatePost(transactor);
  }

}
