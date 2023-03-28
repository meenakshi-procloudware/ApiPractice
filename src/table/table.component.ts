import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersResponse } from './interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class TableComponent implements OnInit {
  @Input() response: UsersResponse;
  @Output() previous = new EventEmitter();
  @Output() next = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
