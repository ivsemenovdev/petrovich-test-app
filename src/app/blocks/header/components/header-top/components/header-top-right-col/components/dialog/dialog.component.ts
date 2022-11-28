import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit {
  products: any = [];

  constructor(private httpClient: HttpClient){}
  ngOnInit(){
    this.httpClient.get("/assets/russian-cities.json").subscribe(data =>{
      console.log(data);
      this.products = data;
    })
  }
}

// Поле	Описание
// name	Название города
// subject	Регион
// district	Федеральный округ
// population	Население
// coords	Координаты ('lat' - широта, 'lon' - долгота)
