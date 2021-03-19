import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  characters = [];
  activeList = 'all';

  constructor(private swService: StarWarsService) {}

  ngOnInit(): void {}

  getCharacters() {
    this.characters = this.swService.getCharacters(this.activeList);
    return this.characters;
  }

  onChoose(tabName: string) {
    this.activeList = tabName;
  }
}

// let tab = new TabsComponent();
