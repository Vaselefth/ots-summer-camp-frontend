import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceFormCustomerComponent } from './invoice-form-customer.component';

describe('InvoiceFormCustomerComponent', () => {
  let component: InvoiceFormCustomerComponent;
  let fixture: ComponentFixture<InvoiceFormCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceFormCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceFormCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
