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

  isCardClicked = false;
  isFocused = false;
  input!: string;
  updatingInput!: ProductInterface;
  updatingInputName!: string;
  products = TestRootEnum.PRODUCTS;
  @ViewChild('btn') btn!: ElementRef;
  @ViewChild('updatingInputElement') updatingInputElement!: ElementRef;
  @ViewChild('updatingContainer') updatingContainer!: ElementRef;
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

  @HostListener('document:click', ['$event', '$event.target'])
  onOutsideClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement.className.split(' ').includes('updatable')) {
      this.isCardClicked = false;
    }
  }

  @HostListener('document:keydown.enter')
  onEnterHandler(): void {
    if (this.isFocused) {
      this.btn.nativeElement.click();
    } else if (this.isCardClicked) {
      this.onSendUpdate();
    } else return;
  }

  ngOnInit(): void {
    this.getProducts$.subscribe();
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  OnSendMsg(): void {
    this.isCardClicked = false;

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

  onRemoveProduct(id: number, event: MouseEvent): void {
    event.stopPropagation();
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

  onUpdateProduct(product: ProductInterface): void {
    this.isCardClicked = true;
    this.updatingInput = product;
    this.updatingInputName = product.name;

    setTimeout(() => {
      this.updatingInputElement?.nativeElement.focus();
    }, 0);

  }

  onSendUpdate(): void {
    this.updatingInput.name = this.updatingInputElement?.nativeElement?.value;
    this.dataService.updateProduct('product', this.updatingInput)
      .pipe(
        switchMap(() => this.getProducts$),
        tap(res => {
          this._products$.next(res);
          this.isCardClicked = false;
        }),
        takeUntil(this._destroy$)
      ).subscribe();
  }
}

