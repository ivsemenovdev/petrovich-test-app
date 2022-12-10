import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { DataService, ProductInterface } from './services/data.service';

export enum TestRootEnum {
  PRODUCTS = 'products'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isFocused = false;
  input!: string;
  products = TestRootEnum.PRODUCTS;
  @ViewChild('btn') btn!: ElementRef;
  private _destroy$ = new Subject();
  private _products$ = new BehaviorSubject<ProductInterface[]>([]);
  products$ = this._products$.asObservable();
  getProducts$ = this.dataService.getProducts(this.products)
    .pipe(
      tap(val => this._products$.next(val)),
      takeUntil(this._destroy$)
    );

  constructor(private dataService: DataService) {
  }

  @HostListener('document:keydown.enter')
  onEnterHandler() {
    if (!this.isFocused) return;

    this.btn.nativeElement.click();
  }

  ngOnInit(): void {
    this.getProducts$.subscribe();
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  OnSendMsg() {
    if (!this.input) return;

    this.dataService.addProduct('product', ({id: 12, name: this.input, category_id: 32, price: 345, brand: 'Комета'}))
      .pipe(
        switchMap(() => this.getProducts$),
        tap(res => {
          this._products$.next(res);
          this.input = '';
        }),
        takeUntil(this._destroy$)
      ).subscribe();
  }

  onRemoveProduct(id: number) {
    this.dataService.removeProduct('product', id)
      .pipe(
        switchMap(() => this.getProducts$),
        tap(res => {
          this._products$.next(res);
          this.input = '';
        }),
        takeUntil(this._destroy$)
      ).subscribe();
  }
}
