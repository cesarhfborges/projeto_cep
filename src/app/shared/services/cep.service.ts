import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(
    private http: HttpClient
  ) {
  }

  getCep(cep: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/${cep}/json/`);
  }
}
