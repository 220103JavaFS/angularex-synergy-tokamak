import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joel-page',
  templateUrl: './joel-page.component.html',
  styleUrls: ['./joel-page.component.css'],
})
export class JoelPageComponent implements OnInit {
  pokemonList: any[] = [];
  pokemon: any = '';
  url: string = 'https://pokeapi.co/api/v2/pokemon/249';
  input: string = '';

  async getPokemon() {
    var response = await fetch('https://pokeapi.co/api/v2/pokemon/249', {
      method: 'GET',
    });

    var pokemon = await response.json();
    this.pokemonList.push(pokemon);

    response = await fetch('https://pokeapi.co/api/v2/pokemon/6', {
      method: 'GET',
    });

    pokemon = await response.json();
    this.pokemonList.push(pokemon);

    response = await fetch('https://pokeapi.co/api/v2/pokemon/384', {
      method: 'GET',
    });

    pokemon = await response.json();
    this.pokemonList.push(pokemon);

    response = await fetch('https://pokeapi.co/api/v2/pokemon/131', {
      method: 'GET',
    });

    pokemon = await response.json();
    this.pokemonList.push(pokemon);

    response = await fetch('https://pokeapi.co/api/v2/pokemon/373', {
      method: 'GET',
    });

    pokemon = await response.json();
    this.pokemonList.push(pokemon);

    response = await fetch('https://pokeapi.co/api/v2/pokemon/130', {
      method: 'GET',
    });

    pokemon = await response.json();
    this.pokemonList.push(pokemon);
  }

  async getAnother(inputString:string){
    
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputString}`, {
      method: 'GET',
    });

    var pokemon = await response.json();
    this.pokemonList.push(pokemon);
  }


  constructor() {}

  ngOnInit(): void {
    this.getPokemon();
    console.log(this.pokemonList);
  }
}
