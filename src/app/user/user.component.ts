import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public dateOfBirth: any;
  public gender: any;
  public email: any;
  public name: any;
  public employment: any;
  public address: any;
  public city: any;
  public country: any;
  public postalCode: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.getCustomerProfile(params['id']);
      }
    );
  }

  getCustomerProfile(id: string) {
    this.apiService.getCustomerProfile(id).subscribe((data: any) => {
      console.log(data);
      this.dateOfBirth = data.date_of_birth.year + ' ' + data.date_of_birth.month + ' ' + data.date_of_birth.dayOfMonth;
      this.gender = data.gender;
      this.email = data.email;
      this.name = data.legal_name;
      this.employment = data.employment_status;

      let streetAddress = '';
      for (let i = 0; i < data.address.street_address.length; i++) {
        console.log(data.address[i]);
        streetAddress = streetAddress + data.address[i] + ' ';
      }
      this.address = streetAddress;
      this.city = data.city;
      this.country = data.country;
      this.postalCode = data.zip_code;
    });
  }

}
