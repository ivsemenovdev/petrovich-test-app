import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/services/cities.service';
import { CitiesSearchService } from 'src/app/services/cities-search.service';
import { ICities } from '../../../../../../../../services/cities.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})


export class DialogComponent implements OnInit {

  public cities: ICities[] = [];
  public searchValue = '';
  public citiesFound: ICities[] = [];

  constructor(private citiesService: CitiesService,
              private citiesSearchService: CitiesSearchService) {
  }

  ngOnInit() {

    this.cities = this.citiesService.getCities();
    this.citiesFound = this.cities;

    this.citiesSearchService.searchCities$.subscribe({
      next: (value: any) => {
        console.log(value);
        if (value.inputType === 'deleteContentBackward') {
          this.searchValue = this.searchValue.slice(0, -1);
          this.citiesFound = this.cities.filter((el) => el.name.includes(this.searchValue));
        } else {
          this.searchValue += value.data;
          this.citiesFound = this.cities.filter((el) => el.name.includes(this.searchValue));
        }
      },

      error: err => console.log(err)
    });

  }
}

