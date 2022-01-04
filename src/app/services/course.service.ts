import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { ICourse } from '../interfaces/course.interface';
import { ILesson } from '../interfaces/lesson.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private API_URL = environment.api.api_1
  constructor(private http: HttpClient) { }

  getAll(limit: number = 30, name: string | undefined): Observable<ICourse[]> {
    let params: Params = {
      limit,
    };
    if (name) params["name"] = name;

    return this.http.get<ICourse[]>(this.API_URL + "/courses", {
      params
    })
  }

  get(id: number): Observable<ICourse> {
    return this.http.get<ICourse>(this.API_URL + "/courses/" + id)
  }
}
