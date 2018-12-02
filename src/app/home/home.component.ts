import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api/api.service';
import * as Chartist from 'chartist';
import { Router } from '@angular/router';
import { isObject } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private customer_id: any;

  private currentPortfolioLabels: any;
  private currentPortfolioData: any;
  public currentPortfolioLegend: any;
  public currentPortfolioGraph: any;
  public currentPortfolioGraphType: ChartType;

  private recommendedPortfolioLabels: any;
  private recommendedPortfolioData: any;
  public recommendedPortfolioLegend: any;
  public recommendedPortfolioGraph: any;
  public recommendedPortfolioGraphType: ChartType;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.getCustomerSummary();

    this.route.params.subscribe(
      params => {
        this.customer_id = params['id'];
      }
    );

    this.currentPortfolioGraphType = ChartType.Pie;
    this.currentPortfolioLabels = [];
    this.currentPortfolioData = [];
    this.currentPortfolioLegend = [];

    this.recommendedPortfolioGraphType = ChartType.Pie;
    this.recommendedPortfolioLabels = [];
    this.recommendedPortfolioData = [];
    this.recommendedPortfolioLegend = [];

    this.sendRequestForCurrentPortfolioGraphData(this.customer_id);
    this.sendRequestForRecommendedPortfolioGraphData(this.customer_id);
  }

  getCustomerSummary() {
    this.apiService.getCustomerList().subscribe((data: Object) => {
      //console.log(data);
    });
  }

  sendRequestForCurrentPortfolioGraphData(id: string) {
    this.apiService.getCurrentPortfolio(id).subscribe((data: any) => {
      let colors: Array<string> = ['fa fa-circle text-info', 'fa fa-circle text-danger', 'fa fa-circle text-warning'];
      for (let i = 0; i < data.names.length; i++) {
        this.currentPortfolioLegend.push({title: i, imageClass: colors[Math.floor(Math.random() * colors.length)]});
        this.currentPortfolioLabels.push(i);
      }
      console.log('currentPortfolioLabels');
      console.log(this.currentPortfolioLabels);

      for (let i = 0; i < data.values.length; i++) {
        this.currentPortfolioData.push(data.values[i]);
      }
      console.log('currentPortfolioLabels');
      console.log(this.currentPortfolioData);

      this.currentPortfolioGraph = {
        labels: this.currentPortfolioLabels,
        series: this.currentPortfolioData
      };
    });
  }

  sendRequestForRecommendedPortfolioGraphData(id: string) {
    this.apiService.getRecommendedPortfolio(id).subscribe((data: any) => {
      let colors: Array<string> = ["fa fa-circle text-info","fa fa-circle text-danger","fa fa-circle text-warning"];
      for (let i = 0; i < data.names.length; i++) {
        this.recommendedPortfolioLegend.push({title: i, imageClass: colors[Math.floor(Math.random() * colors.length)]});
        this.recommendedPortfolioLabels.push(i);
      }

      for (let i = 0; i < data.values.length; i++) {
        this.recommendedPortfolioData.push(data.values[i]);
      }

      this.recommendedPortfolioGraph = {
        labels: this.recommendedPortfolioLabels,
        series: this.recommendedPortfolioData
      };
    });
  }
}
