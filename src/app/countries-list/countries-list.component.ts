import { Component, OnInit } from '@angular/core';
import { Country } from './country-class';
import { COUNTRIES } from './country.mock-data';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  countriesList: Country[] = COUNTRIES;
  selectedCountryCapital: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(capital): void {
    this.selectedCountryCapital = capital;
  }

}
