import { Injectable } from '@angular/core';
import { ICities } from './cities.interface';

@Injectable({
  providedIn: 'root'
})

export class CitiesService {

  public cities: ICities[] = [
    {
      id: 1,
      name: 'Москва'
    },
    {
      id: 2,
      name: 'Томск'
    },
    {
      id: 3,
      name: 'Новосибирск'
    },
    {
      id: 4,
      name: 'Иркутск'
    },
    {
      id: 5,
      name: 'Воронеж'
    },
    {
      id: 6,
      name: 'Краснодар'
    },
    {
      id: 7,
      name: 'Владивосток'
    },
    {
      id: 8,
      name: 'Симферополь'
    },
    {
      id: 9,
      name: 'Севастополь'
    },
    {
      id: 10,
      name: 'Красноярск'
    },
  ];

  getCities() {
    return this.cities;
  }
}

