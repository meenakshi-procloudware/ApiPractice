import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../table/interceptor';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CardComponent implements OnInit {
  @Input() users: User[] = [];
  constructor() {}

  ngOnInit() {}
}
