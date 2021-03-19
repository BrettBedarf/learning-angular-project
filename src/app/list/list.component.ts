import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() characters: {}[];
  @Output() sideChangedList = new EventEmitter<{
    name: string;
    side: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onSideChanged(charInfo) {
    this.sideChangedList.emit(charInfo);
  }
}
