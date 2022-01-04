import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment'
import { ILesson } from '../interfaces/lesson.interface';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  private API_URL = environment.api.api_1;
  constructor(private http: HttpClient) { }
  
  get(id: number | string): Observable<ILesson> {
    return this.http.get<ILesson>(this.API_URL + "/lessons/" + id)
  }
}
