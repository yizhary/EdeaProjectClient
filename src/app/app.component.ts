import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {typeCheckFilePath} from '@angular/compiler-cli/src/ngtsc/typecheck';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersSummary } from './model/OrdersSummary';
import { Order } from './model/Order';


const ELEMENT_DATA: any[] = [
  {'orderID': 10643, 'customerID': 'ALFKI',   'companyName': 'Alfreds Futterkiste', 'address': 'Obere Str. 57', 'city': 'Berlin', 'region': 'AF', 'shippingCost': 0.0 },
  { 'orderID': 10692, 'customerID': 'ALFKI',   'companyName': 'Alfreds Futterkiste', 'address': 'Obere Str. 57', 'city': 'Berlin', 'region': 'AF', 'shippingCost': 0.0 },
  {"orderID":10926,"customerID":"ANATR","companyName":"Ana Trujillo Emparedados y helados","address":"Avda. de la Constitución 2222","city":"México D.F.","region":null,"shippingCost":0.0}
  ,{"orderID":10365,"customerID":"ANTON","companyName":"Antonio Moreno Taquería","address":"Mataderos  2312","city":"México D.F.","region":null,"shippingCost":0.0},
  { 'orderID': 10952, 'customerID': 'ALFKI',   'companyName': 'Alfreds Futterkiste', 'address': 'Obere Str. 57', 'city': 'Berlin', 'region': 'AF', 'shippingCost': 0.0 }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient) { }
  displayedColumns: string[] = ['shippingCost', 'region', 'city', 'address', 'companyName', 'orderID'];
  
  dataSource:any;
  
  rowCount:string="8";
  orderSummary:OrdersSummary;
  
  result$:Observable <any>;
  
   ngOnInit(): void {
    this.orderSummary=new OrdersSummary();
    this.result$= this.http.get("http://localhost/webApiEdea/api/Current/"+this.rowCount);
    this.result$.subscribe(  data => {
          this.dataSource = data;
          this.updateSummaryTable();
        },
          error => {
            console.log('working with mock data',error);
            this.dataSource = ELEMENT_DATA;
            this.updateSummaryTable();
      });
  }
  onPercentChange($event: any, order: any,fieldName : string) {
    switch (fieldName) {
      case 'companyName':
        order.companyName = $event.target.value;
        break;
      case 'shippingCost':
        order.shippingCost = Number($event.target.value);
        break;
    }
    this.updateSummaryTable();
    //console.log( this.dataSource);
 }

  

  findIndexToUpdate(newItem) { 
        return newItem.orderID === this;
  }

  updateSummaryTable(){
    const totalCost: number = this.dataSource.reduce((total, item) => total + item.shippingCost, 0);
    this.orderSummary.orderCountSummary = this.dataSource.length;
    this.orderSummary.shippingCostSum = Number(totalCost);
    this.orderSummary.shippingCostAvg = Number((totalCost / this.dataSource.length).toFixed(1));
  }
}


