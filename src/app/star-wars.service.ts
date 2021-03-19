export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ];

  getCharacters(activeList: string) {
    return this.characters.filter(
      (c) => c.side === activeList || activeList === 'all'
    );
  }
  onSideChanged(charInfo) {
    const charToChange = this.characters.find((c) => c.name === charInfo.name);
    charToChange.side = charInfo.side;
  }
}
