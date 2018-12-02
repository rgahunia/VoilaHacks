import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://40.86.209.227';
  private token1 = 'YjU1N2I2YTItM2Q2ZC00MTMwLWExZTQtNzM4YmNhNGIzNjc4MjVmNDQzNDItNmRlMy00MWYwLTljZDAtOTFmMmRjNzAw';
  private token2 = 'M2EzZTE3ODZlYzYtMmNjMi00OTAwLWEyYjItMjc0NTdjYjYyZjdjNWYyZmE2MWItZmU3NC00MzdjLWJhOWQtYTUyMjZiMzRhMjZl';

  constructor(private httpClient: HttpClient) {}

  getCustomerList() {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('Authorization', this.token1 + this.token2);

    return this.httpClient.get(this.API_URL + '/api/v1/customers', {headers: httpHeaders});
  }

  getCustomerSummary() {
  }

  getCustomerProfile(id: string) {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('Authorization', this.token1 + this.token2);

    return this.httpClient.get(this.API_URL + '/api/v1/customers/' + id, {headers: httpHeaders});
  }

  getCurrentPortfolio(id: string) {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('Authorization', this.token1 + this.token2);

    return this.httpClient.get(this.API_URL + '/api/v1/customers/' + id + '/portfolio/current', {headers: httpHeaders});
  }

  getRecommendedPortfolio(id: string) {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('Authorization', this.token1 + this.token2);

    return this.httpClient.get(this.API_URL + '/api/v1/customers/' + id + '/portfolio/recommended', {headers: httpHeaders});
  }

  getRiskDescription(risk: string) {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('Authorization', this.token1 + this.token2);

    return this.httpClient.get(this.API_URL + '/api/v1/risks/' + risk, {headers: httpHeaders});
  }
}
