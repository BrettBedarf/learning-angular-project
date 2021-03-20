import { LogService } from './log.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ];
  private logService: LogService;

  constructor(logService: LogService) {
    this.logService = logService;
  }

  getCharacters(activeList: string) {
    return this.characters.filter(
      (c) => c.side === activeList || activeList === 'all'
    );
  }
  onSideChanged(charInfo: { name: string; side: string }) {
    const charToChange = this.characters.find((c) => c.name === charInfo.name);
    charToChange.side = charInfo.side;
    this.logService.writeLog(
      `Changed side of ${charInfo.name} to ${charInfo.side}`
    );
  }

  addCharacter(name, side) {
    const newChar = { name: name, side: side };
    this.characters.push(newChar);
  }
}
