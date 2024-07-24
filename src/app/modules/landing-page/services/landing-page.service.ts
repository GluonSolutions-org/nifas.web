import { Injectable, Injector } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { BaseService } from '../../../core/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService extends BaseService {

    constructor(Injector: Injector) {
        super(Injector)
    }

    getAllData(): Observable<any[]> {
        const sliders$ = this.getSlidersItems({ currentPage: 1, pageSize: 150, active: 1 });
        const offers$ = this.getOffersItems({ currentPage: 1, pageSize: 150, active: 1 });
        const services$ = this.getServicesItems({ currentPage: 1, pageSize: 150, active: 1 });
        const blogs$ = this.getBlogItems({ currentPage: 1, pageSize: 150, active: 1 });
        const frequentQuestions$ = this.getFrequentQuestionsItems({ currentPage: 1, pageSize: 150, active: 1 });
    
        return forkJoin([sliders$, offers$, services$, blogs$, frequentQuestions$]);
    }

    getSlidersItems(data:any): Observable<any> {
        return this.post<any>(`${this.apiUrl}api/ImageSliders/all`, data);
    }

    getOffersItems(data:any): Observable<any> {
        return this.post<any>(`${this.apiUrl}api/Offers/all`, data);
    }

    getServicesItems(data:any): Observable<any> {
        return this.post<any>(`${this.apiUrl}api/ProfessionType/all`, data);
    }

    getBlogItems(data:any): Observable<any> {
        return this.post<any>(`${this.apiUrl}api/Blogs/all`, data);
    }

    getFrequentQuestionsItems(data:any): Observable<any> {
        return this.post<any>(`${this.apiUrl}api/FrequentQuestions/all`, data);
    }
}
