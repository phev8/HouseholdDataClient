import { Component } from '@angular/core';

import { Measurement } from './measurement';
import {MeasurementDataService} from './measurement-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  temperatureData: Measurement;
  humidityData: Measurement;

  constructor (private measurementDataService: MeasurementDataService) {}

  ngOnInit() { this.getMeasurementsForToday(); }

  getMeasurementsForToday(): void {
    this.measurementDataService.getHumidityDataForDay(new Date())
      .then(measurements => {
        this.humidityData = measurements;
        this.lineChartData[0].data = measurements.values;
        this.lineChartData[1].data = measurements.values;
        this.lineChartLabels = measurements.times;
        console.log(this.humidityData);
      });
    this.measurementDataService.getTemperatureDataForDay(new Date())
      .then(measurements => {
        this.temperatureData = measurements;
        this.lineChartData[1].data = measurements.values;
        this.lineChartLabels = measurements.times;
      });
  }

  // lineChart
  public lineChartData:Array<any> = [
    {data: [25, 30, 45], label: 'Temperature', borderWidth: 3, fill: true, pointRadius: 0},
    {data: [12, 6, 2], label: 'Humidity', borderWidth: 1, fill: false, pointRadius: 0}
  ];
  public lineChartLabels:Array<any> = [1, 2 ,3];

  public lineChartOptions:any = {
    responsive: true,
  };
  // public lineChartColors:Array<any> = [
  //   { // grey
  //     backgroundColor: 'rgba(148,159,177,0.2)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   },
  //   { // dark grey
  //     backgroundColor: 'rgba(77,83,96,0.2)',
  //     borderColor: 'rgba(77,83,96,1)',
  //     pointBackgroundColor: 'rgba(77,83,96,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(77,83,96,1)'
  //   },
  //   { // grey
  //     backgroundColor: 'rgba(148,159,177,0.2)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   }
  // ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    let Labels = new Array(24*60);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < 24*60; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
        this.lineChartLabels[j] = j;
      }
    }
    this.lineChartLabels = Labels;
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
