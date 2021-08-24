import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice-form-customer',
  templateUrl: './invoice-form-customer.component.html',
  styleUrls: ['./invoice-form-customer.component.css']
})
export class InvoiceFormCustomerComponent implements OnInit {

  userForm: FormGroup
  listData: any[];


  constructor(private fb:FormBuilder) { 

    this.listData = [];

    this.userForm = this.fb.group({
      name : ['', Validators.required],
      address : ['', Validators.required],
      ContactNo: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  addItem(){
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }
  reset(){
    this.userForm.reset();
  }

  removeItems(element:any){
    this.listData.forEach((value:any,dex:any) => {
      if(value == element){
        this.listData.splice(dex,1)
      }

    });


  }
}
