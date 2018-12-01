import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.getCustomerProfile(params['id']);
      }
    );
  }

  getCustomerProfile(id: string) {
    this.apiService.getCustomerProfile(id).subscribe((data: Object) => {
      console.log(data);
    });
  }

}
