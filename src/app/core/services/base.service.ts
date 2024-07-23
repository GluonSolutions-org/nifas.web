import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public apiUrl = environment.apiUrl;

//   constructor(private http: HttpClient) {}
  protected http: HttpClient;
  constructor(protected injector: Injector) {
      this.http = injector.get(HttpClient);
  }
 

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url) 
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body) 
  }

  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(url, body)    
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url)
  }
}


// getItems(): Observable<any[]> {
//   return this.get<any[]>(`${this.apiUrl}/items`);
// }

// getItemById(id: number): Observable<any> {
//   return this.get<any>(`${this.apiUrl}/items/${id}`);
// }

// createItem(item: any): Observable<any> {
//   return this.post<any>(`${this.apiUrl}/items`, item);
// }

// updateItem(id: number, item: any): Observable<any> {
//   return this.put<any>(`${this.apiUrl}/items/${id}`, item);
// }

// deleteItem(id: number): Observable<any> {
//   return this.delete<any>(`${this.apiUrl}/items/${id}`);
// }