import { Component, OnInit } from '@angular/core';
import { response } from '../../response';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { FormArray } from '@angular/forms/src/model';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
  providers: [response]
})
export class AccountDetailsComponent implements OnInit {
  accountdetails: {};
  show = 3;
  limit = 3;
  accountSortOrder: string;
  cashSortOrder: string;
  showDefaultSortedTab: boolean = false;
  constructor(public data: response) {
    this.show = 3
  }

  ngOnInit() {
    this.accountSortOrder = 'asc';
    this.cashSortOrder = 'asc';
    this.accountdetails = this.data.accountdetails;
    this.sortData('AvaliableCash');
    const propOwn = Object.keys(this.accountdetails).length;
    for (var i = 0; i < propOwn; i++) {
      if (this.accountdetails[i].price.indexOf("+") != -1) {
        this.accountdetails[i].positive = true;
      } else {
        this.accountdetails[i].positive = false;
      }
    }
  }

  loadMore() {
    this.show += this.limit;
  }

  sortData(sortOnTab) {
    if (sortOnTab == 'Account') {
      this.showDefaultSortedTab = true;
      if (this.accountSortOrder == 'asc') {
        this.accountSortOrder = 'desc';
        this.accountdetails.sort(function (a, b) {
          return a.accountNumber.localeCompare(b.accountNumber)
        });
      } else {
        this.accountSortOrder = 'asc';
        this.accountdetails.sort(function (a, b) {
          return b.accountNumber.localeCompare(a.accountNumber)
        });
      }
    } else {
      this.showDefaultSortedTab = false;
      if (this.cashSortOrder == 'asc') {
        this.cashSortOrder = 'desc';
        this.accountdetails.sort(function (a, b) {
          return b.availCash.localeCompare(a.availCash)
        });
      } else {
        this.cashSortOrder = 'asc';
        this.accountdetails.sort(function (a, b) {
          return a.availCash.localeCompare(b.availCash)
        });
      }
    }
  }

}
