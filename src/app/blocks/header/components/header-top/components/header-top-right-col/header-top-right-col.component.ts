import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';


@Component({
  selector: 'app-header-top-right-col',
  templateUrl: './header-top-right-col.component.html',
  styleUrls: ['./header-top-right-col.component.scss']
})

export class HeaderTopRightColComponent {
  constructor(public dialog: MatDialog) {
  }

  openDialog() {

    const dialogBoxSettings = {
      height: 'auto',
      width: '500px',
      margin: '0 auto',
    };

    this.dialog.open(DialogComponent, dialogBoxSettings);

  }
}

