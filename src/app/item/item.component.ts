import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() character;

  constructor(private swService: StarWarsService, private router: Router) {}

  ngOnInit(): void {}

  onAssign(side) {
    // Bad - don't want to allow changing character from anywhere,hard to track:
    // this.character.side = side;

    this.swService.onSideChanged({ name: this.character.name, side: side });
    const currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
