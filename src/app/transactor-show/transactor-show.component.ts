import { Component, OnInit } from '@angular/core';
import { TransactorShowService } from './transactor-show.service';
import { Transactor } from '../transactor';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-transactor-show',
  templateUrl: './transactor-show.component.html',
  styleUrls: ['./transactor-show.component.css']
})
export class TransactorShowComponent implements OnInit {

  loadedTransactors: Transactor[] = [];
  transactorOne = <Transactor>{};
  isShow = false;

  constructor(private transactorShowService: TransactorShowService, 
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  numberOnly(event): boolean {
    return this.transactorShowService.numberOnlyService(event);
  }

  onClickUpdate(id) {
    console.log(id);
    this.isShow = !this.isShow;
  }

  onClickDelete(id) {
    let answer = confirm("Θέλετε σίγουρα να πραγματοποιήσετε διαγραφή του Συναλλασσόμενου??");
    if(answer) {
     this.transactorShowService.onDeleteTransactor(id);
    }
    else{
      alert("Πήγαινε πίσω");
    }
  }

  onClickRecord(tin): Transactor {
    this.transactorOne = this.transactorShowService.onGetTransactor(tin);
    return this.transactorOne;
  }

  onClickList(): Transactor[] {
    this.loadedTransactors = this.transactorShowService.onGetTransactors();
    return this.loadedTransactors;
  }

  onLogout(){
    this.authService.logout();
  }
}
