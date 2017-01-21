import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Measurement } from './measurement';

@Injectable()
export class MeasurementDataService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private hostname = "http://192.168.188.37:1337";

  constructor(private http: Http) { }

  getHumidityDataForDay(day: Date): Promise<Measurement> {
    return this.http.get(this.hostname + "/measurement/getDataForDay?sensorName=humidity&day=" + day.toISOString())
      .toPromise()
      .then(response => {
        let measurement = new Measurement();
        measurement.times = [];
        measurement.values = [];
        for (let data of response.json().values) {
          measurement.times.push(new Date(data.timestamp));
          measurement.values.push(data.value);
        }
        return measurement;
      })
      .catch(this.handleError);
  }

  getTemperatureDataForDay(day: Date): Promise<Measurement> {
    return this.http.get(this.hostname + "/measurement/getDataForDay?sensorName=temperature&day=" + day.toISOString())
      .toPromise()
      .then(response => {
        let measurement = new Measurement();
        measurement.times = [];
        measurement.values = [];
        for (let data of response.json().values) {
          measurement.times.push(new Date(data.timestamp));
          measurement.values.push(data.value);
        }
        return measurement;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
