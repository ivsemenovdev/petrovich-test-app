import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesSearchService {

  searchCities$ = new Observable((observer) => {
    console.log('Start in observable');
    const inputElement = document.getElementById('search');

    if (!inputElement) {
      observer.error('Element does not exists');
      return;
    }

    inputElement.addEventListener('input', event => {
      observer.next(event);
    });

    console.log('End in observable');
  });

}
