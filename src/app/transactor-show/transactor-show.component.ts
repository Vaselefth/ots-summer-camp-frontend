import { Component, OnInit } from '@angular/core';
import { TransactorShowService } from './transactor-show.service';
import { Transactor } from '../transactor';

@Component({
  selector: 'app-transactor-show',
  templateUrl: './transactor-show.component.html',
  styleUrls: ['./transactor-show.component.css']
})
export class TransactorShowComponent implements OnInit {

  loadedTransactors: Transactor[] = [];

  constructor(private transactorShowService: TransactorShowService) { }

  ngOnInit(): void {
  }

  numberOnly(event): boolean {
    return this.transactorShowService.numberOnlyService(event);
  }

  getTransactors(): Transactor[] {
    this.loadedTransactors = this.transactorShowService.onGetTransactors();
    return this.loadedTransactors;
  }

  onClickList() {
    this.getTransactors();
  }
}
