import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api/api.service';
import * as Chartist from 'chartist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public emailChartType: ChartType;
    public emailChartData: any;
    public emailChartLegendItems: LegendItem[];

    public hoursChartType: ChartType;
    public hoursChartData: any;
    public hoursChartOptions: any;
    public hoursChartResponsive: any[];
    public hoursChartLegendItems: LegendItem[];

    public emailChartType1: ChartType;
    public emailChartData1: any;
    public activityChartOptions: any;
    public activityChartResponsive: any[];
    public emailChartLegendItems1: LegendItem[];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) { }
   private customer_id :any; 
   private mylabels :any;
   private myseries :any;
   private mylegands :any;
   // second 
   private mylabels1 :any;
   private myseries1 :any;
   private mylegands1 :any;
  ngOnInit() {
    this.getCustomerSummary();

    this.route.params.subscribe(
      params => {
        
        this.customer_id = params['id'];
      }
    );


    

      this.emailChartType = ChartType.Pie;
      // test data 
      // end test data
      this.mylabels = []; // ['62%', '32%', '6%'];
      this.myseries =[];// [62, 32, 6];
        this.mylegands=[];
        // second 
        this.mylabels1 = []; 
        this.myseries1 =[];
          this.mylegands1=[];
        this.accessCurrentPortfolio(this.customer_id); //UNCOMMENT ME
        // for the second graph 
        this.accessRecommendedPortfolio(this.customer_id);
      this.emailChartData = {
        labels: this.mylabels,
        series: this.myseries
      };
      this.emailChartLegendItems = this.mylegands;// [
        // { title: 'Open', imageClass: 'fa fa-circle text-info' },
        // { title: 'Bounce', imageClass: 'fa fa-circle text-danger' },
        // { title: 'Unsubscribe', imageClass: 'fa fa-circle text-warning' }
      //];
// end pie chart 
      this.hoursChartType = ChartType.Line;
      this.hoursChartData = {
        labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
        series: [
          [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
          [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
          [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509]
        ]
      };
      this.hoursChartOptions = {
        low: 0,
        high: 800,
        showArea: true,
        height: '245px',
        axisX: {
          showGrid: false,
        },
        lineSmooth: Chartist.Interpolation.simple({
          divisor: 3
        }),
        showLine: false,
        showPoint: false,
      };
      this.hoursChartResponsive = [
        ['screen and (max-width: 640px)', {
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.hoursChartLegendItems = [
        { title: 'Open', imageClass: 'fa fa-circle text-info' },
        { title: 'Click', imageClass: 'fa fa-circle text-danger' },
        { title: 'Click Second Time', imageClass: 'fa fa-circle text-warning' },
        { title: 'Click third Time', imageClass: 'fa fa-circle text-warning' }
      ];

      this.emailChartType1 = ChartType.Pie;
      this.emailChartData1 = {
        labels: this.mylabels1,
        series: this.myseries1
      };
      this.activityChartOptions = {
        seriesBarDistance: 10,
        axisX: {
          showGrid: false
        },
        height: '245px'
      };
      this.activityChartResponsive = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.emailChartLegendItems1 = [
        { title: 'Tesla Model S', imageClass: 'fa fa-circle text-info' },
        { title: 'BMW 5 Series', imageClass: 'fa fa-circle text-danger' }
      ];
    }

    getCustomerSummary() {
      this.apiService.getCustomerList().subscribe((data: Object) => {
        //console.log(data);
      });
    }



    accessCurrentPortfolio(id: string) {
      this.apiService.getCurrentPortfolio(id).subscribe((data: any) => {
       // console.log(data);
        //DATA is the data for the pie chart
        let colors :Array<string> = ["fa fa-circle text-info","fa fa-circle text-danger","fa fa-circle text-warning"];
        for (let i = 0; i < data.names.length; i++) {
          this.mylegands.push({title:data.names[i],imageClass: colors[Math.floor(Math.random() * colors.length)]});
          this.mylabels.push(data.names[i]);
        }
        console.log(this.mylabels); 
        console.log(this.emailChartLegendItems); 
        // values 
        for (let i = 0; i < data.values.length; i++) {
          this.myseries.push(data.values[i]);
        }
        console.log(this.myseries); 
        
        
      });
    }
    // second graph 
    accessRecommendedPortfolio(id: string) {
      this.apiService.getRecommendedPortfolio(id).subscribe((data: any) => {
       //console.log(data);
        //DATA is the data for the pie chart
        let colors :Array<string> = ["fa fa-circle text-info","fa fa-circle text-danger","fa fa-circle text-warning"];
        for (let i = 0; i < data.names.length; i++) {
          this.mylegands1.push({title:i,imageClass: colors[Math.floor(Math.random() * colors.length)]});
          this.mylabels1.push(data.names[i]);
        }
        console.log(this.mylabels1); 
        console.log(this.emailChartLegendItems1); 
        // values 
        for (let i = 0; i < data.values.length; i++) {
          this.myseries1.push(data.values[i]);
        }
        console.log(this.myseries1); 
        
        
      });
    }
}
