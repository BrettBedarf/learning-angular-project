import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ];
  activeList = 'all';

  constructor() {}

  ngOnInit(): void {}

  getCharacters() {
    return this.characters.filter(
      (c) => c.side === this.activeList || this.activeList === 'all'
    );
  }
  onChoose(tabName: string) {
    this.activeList = tabName;
  }
  onSideChangedRoot(charInfo) {
    const charToChange = this.characters.find((c) => c.name === charInfo.name);
    charToChange.side = charInfo.side;
  }
}

// let tab = new TabsComponent();
