import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { MainService } from './main.service';
import { FormsModule } from '@angular/forms';
import { User, UsersResponse } from './table/interface';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    CardComponent,
    TableComponent,
    FormsModule,
  ],
  providers: [MainService],
  templateUrl: './main.html',
})
export class App implements OnInit {
  name = 'Angular';
  response: UsersResponse | undefined;
  users: User[] = [];
  mode: 'table' | 'cards' = 'table';
  page: number = 1;
  per_page: number = 2;
  pageNumber: number[] = [2, 4, 6];
  constructor(private http: HttpClient, private mainService: MainService) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.mainService
      .getUsers(this.page, this.per_page)
      .subscribe((res: UsersResponse) => {
        console.log(res);
        this.response = res;
        this.page = this.response.page;
        this.users = this.response.data;
        console.log('::::', this.response.data);
      });
  }
  previousPage() {
    this.page = this.page - 1;
    console.log('::pre', this.page - 1);
    this.getData();
  }
  nextPage() {
    this.page = this.page + 1;
    console.log('::next', this.page + 1);
    this.getData();
  }
}
bootstrapApplication(App);
