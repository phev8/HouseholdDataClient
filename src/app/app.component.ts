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

  public dt: Date = new Date();

  constructor (private measurementDataService: MeasurementDataService) {}

  ngOnInit() { this.getMeasurementsForDay(new Date); }

  getMeasurementsForDay(day: Date): void {
    this.measurementDataService.getHumidityDataForDay(day)
      .then(measurements => {
        this.humidityData = measurements;
        this.lineChartHumData[0].data = measurements.values;        
        this.lineChartHumLabels = measurements.times;
        console.log(this.humidityData);
      });
    this.measurementDataService.getTemperatureDataForDay(day)
      .then(measurements => {
        this.temperatureData = measurements;
        this.lineChartTempData[0].data = measurements.values;
        this.lineChartTempLabels = measurements.times;
      });
  }

  // lineChart
  public lineChartHumData:Array<any> = [    
    {data: [12, 6, 2], label: 'Humidity', borderWidth: 1, fill: false, pointRadius: 0}
  ];
  public lineChartTempData:Array<any> = [
    {data: [25, 30, 45], label: 'Temperature', borderWidth: 3, fill: true, pointRadius: 0}    
  ];
  public lineChartHumLabels:Array<any> = [1, 2 ,3];
  public lineChartTempLabels:Array<any> = [1, 2 ,3];

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
    this.getMeasurementsForDay(this.dt);
  }

  public dateChanged(e:any):void {
    console.log(e);
    this.getMeasurementsForDay(e);
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
