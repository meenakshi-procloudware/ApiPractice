import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersResponse } from './table/interceptor';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}
  getUsers(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(`https://reqres.in/api/users`);
  }
}
