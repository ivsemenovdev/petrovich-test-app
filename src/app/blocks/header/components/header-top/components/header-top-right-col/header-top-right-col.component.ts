import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-header-top-right-col',
  templateUrl: './header-top-right-col.component.html',
  styleUrls: ['./header-top-right-col.component.scss']
})

export class HeaderTopRightColComponent implements OnInit {

  cities: string[] = ['Москва', 'Томск', 'Новосибирск', 'Иркутск', 'Воронеж', 'Краснодар', 'Владивосток', 'Симферополь', 'Севастополь', 'Красноярск'];
  location: string | undefined;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.location = 'Вся Россия';
  }

  openDialog() {
    const dialogBoxSettings = {
      height: '80%',
      width: '500px',
      margin: '0 auto',
      data: this.cities,
    };
    const dialogRef = this.dialog.open(DialogComponent, dialogBoxSettings);

    dialogRef.afterClosed().subscribe(res => {
      // received data from dialog-component
      if (res) {
        this.location = res.data;
      }
    });

  }
}

