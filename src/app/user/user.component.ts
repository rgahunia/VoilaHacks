import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Router,ActivatedRoute } from '@angular/router';

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
  public creditRating: any;

  public currentBiasType: any;
  public currentTolerance: any;
  public currentBiases: any;
  public currentRiskTolerance: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) { }
  private customer_id: any;
  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.getCustomerProfile(params['id']);
        this.getRecommendedRisk(params['id']);
        this.customer_id = params['id'];
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
        streetAddress = streetAddress + data.address.street_address[i] + ' ';
      }
      this.address = streetAddress;
      this.city = data.address.city;
      this.country = data.address.country;
      this.postalCode = data.address.zip_code;

      this.creditRating = data.credit_rating.rating;
    });
  }


  getRecommendedRisk(id: string) {
    this.apiService.getCurrentPortfolio(id).subscribe((data: any) => {
      let risk = data.risk;
      this.currentRiskTolerance = data.risk;

      this.apiService.getRiskDescription(risk).subscribe((riskData: any) => {
        this.currentBiasType = riskData.biasType;
        this.currentTolerance = riskData.tolerance;
        this.currentBiases = riskData.biases;
      });
    });
  }

  GoToClient(getid) {
    this.router.navigate(['/advisor', { id : getid}]);
  }
}
