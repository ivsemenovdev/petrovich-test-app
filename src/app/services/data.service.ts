// Angular сервис - это обычный класс, используемый в контексте Angular для хранения
// глобального состояния приложения или в качестве поставщика данных.
//
// Задачи сервиса:
//   Получения данных.
//   Хранение данных.
//   Предоставление данных приложению.
//   Можно использовать как канал взаимодействия между отдельными компонентами приложения
//   Сервис может инкапсулировать бизнес-логик
//
// Использование сервисов позволяет соблюдать SOLID принципы

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Создадим интерфейс - объявим соглашений о том, что у объекта ProductInterface
// будут след. свойства
export interface ProductInterface {
  id: number;
  name: string;
  category_id: number;
  price: number;
  brand: string;
}

@Injectable({
  providedIn: 'root',
})

// т.к. сервис это класс, то мы должны его экспортировать для использования в приложении
// для использования в компоненте импортируем сервис и в конструкторе создаём приватную переменную с типом "название сервиса"

export class DataService {

  //создадим свойсто для хранения URL
  api = 'http://141.8.199.120:1880/';

  // для работы с API будем использовать Angular HttpClient сервис из модуля HttpClientModule, т.к. это сервис,
  // то мы его импортируем и добавляем в конструкторе приватную переменную с типом HttpClient
  constructor(private http: HttpClient) {}

  //создадим метод для отправки GET запроса и получения данных
  public getProducts(path: string): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(this.api + path)
  }

  //создадим метод для отправки POST запроса и отправки данных
  public addProduct(path: string, value: ProductInterface): Observable<ProductInterface[]> {
    return this.http.post<ProductInterface[]>(this.api + path, value)
  }

  //создадим метод для отправки DELETE запроса
  public removeProduct(path: string, id: number): Observable<string> {
    return this.http.delete<string>(`${this.api + path}/${id}`)
  }

}


