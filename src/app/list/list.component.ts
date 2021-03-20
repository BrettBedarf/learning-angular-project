import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  characters: {}[] = [];
  acivatedRoute: ActivatedRoute;
  swService: StarWarsService;

  constructor(
    private activatedRoute: ActivatedRoute,
    swService: StarWarsService
  ) {
    this.swService = swService;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.characters = this.swService.getCharacters(params.side);
      console.log(this.characters);
    });
  }
}
