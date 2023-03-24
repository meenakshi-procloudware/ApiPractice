import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { User, UsersResponse } from './table/interceptor';
import { MainService } from './main.service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HttpClientModule, CardComponent, TableComponent],
  providers: [MainService],
  templateUrl: './main.html',
})
export class App implements OnInit {
  name = 'Angular';
  response: UsersResponse | undefined;
  users: User[] = [];
  mode: 'table' | 'cards' = 'cards';
  constructor(private http: HttpClient, private mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.getUsers().subscribe((res: UsersResponse) => {
      console.log(res);
      this.response = res;
      this.users = res.data;
      console.log('::::');
    });
  }
  previousPage() {
    console.log('::pre');
  }
  nextPage() {
    console.log('::next');
  }
}
bootstrapApplication(App);
