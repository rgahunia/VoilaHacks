import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    private customers: Array<any> = [];
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.apiService.getCustomerList().subscribe((data:  Array<any>) => {
      this.customers = data;

      this.tableData1 = {
        headerRow: [ 'ID', 'Name'],
        dataRows: []
      };

      for (let i = 0; i < this.customers.length; i++) {
        this.tableData1.dataRows.push([this.customers[i].customer_id,
          this.customers[i].legal_name,
          this.customers[i].mobile_phone_number,
          this.customers[i].email]);
      }
    });
  }

  accessData(custId: string) {
    this.router.navigate(['/advisor', { id : custId}]);
  }

}
