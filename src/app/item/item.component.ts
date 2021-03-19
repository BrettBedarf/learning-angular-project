import { Component, Input, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() character;

  constructor(private swService: StarWarsService) {}

  ngOnInit(): void {}

  onAssign(side) {
    // Bad - don't want to allow changing character from anywhere,hard to track:
    // this.character.side = side;

    this.swService.onSideChanged({ name: this.character.name, side: side });
  }
}
