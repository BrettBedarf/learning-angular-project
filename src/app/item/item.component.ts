import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() character;
  @Output() sideChanged = new EventEmitter<{ name: string; side: string }>();
  constructor() {}

  ngOnInit(): void {}

  onAssign(side) {
    // Bad - don't want to allow changing character from anywhere,hard to track:
    // this.character.side = side;

    // Good manage character properties from central location
    this.sideChanged.emit({ name: this.character.name, side: side });
  }
}
