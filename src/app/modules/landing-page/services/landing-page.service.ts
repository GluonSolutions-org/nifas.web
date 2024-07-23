import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../../../core/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService extends BaseService {

    constructor(Injector: Injector) {
        super(Injector)
    }

    getItemsSliders(data:any): Observable<any> {
        return this.post<any>(`${this.apiUrl}api/ImageSliders/all`, data);
    }
}
