import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ILanguage } from '../interfaces/language.interface';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private API_URL = environment.api.api_1;
  constructor(private http: HttpClient) { }

  getAll(limit: number = 20):Observable<ILanguage[]>  {
    return this.http.get<ILanguage[]>(this.API_URL + "/languages", {
      params: {
        limit
      }
    })
  }
}
