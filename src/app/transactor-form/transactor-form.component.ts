import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-transactor-form',
  templateUrl: './transactor-form.component.html',
  styleUrls: ['./transactor-form.component.css']
})
export class TransactorFormComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    let transactor = this.signupForm.value.userData;
    console.log(transactor);
  }
}
