import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IModule } from '../interfaces/module.interface';
@Injectable({
  providedIn: 'root',
})
export class ModuleService {
  private API_URL = environment.api.api_1;
  constructor(private http: HttpClient) {}

  get(id: number | string): Observable<IModule> {
    return this.http.get<IModule>(this.API_URL + '/chapters/' + id);
  }
}
