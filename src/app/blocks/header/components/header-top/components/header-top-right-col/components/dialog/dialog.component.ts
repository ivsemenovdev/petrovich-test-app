import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit {

  selectCities = new FormControl('');
  options: string[] = this.data;


  filteredOptions: Observable<string[]> | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: string[],
              public dialogRef: MatDialogRef<DialogComponent>) {
  }

  ngOnInit() {
    this.filteredOptions = this.selectCities.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  closeDialog(option: string) {
    this.dialogRef.close({data: option});
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}

