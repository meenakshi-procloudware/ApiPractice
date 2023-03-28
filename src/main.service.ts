import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersResponse } from './table/interface';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}
  getUsers(page: number, per_page: number): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(
      `https://reqres.in/api/users?per_page=${per_page}&page=` + page
    );
  }
}
