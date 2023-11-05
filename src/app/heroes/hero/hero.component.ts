import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  private _name: string = 'ironMan';
  private _age: number = 45;

  get normaName(): string {
    return this._name;
  }
  
  get normalAge(): number {
    return this._age;
  }

  get capitalizedName(): string {
    return this._name.toUpperCase();
  }

  get heroDescription(): string {
    return `${ this._name } - ${ this._age } `
  }

  public changeNameHero(): void {
    this._name = 'Spiderman';
  }

  public changeAgeHero(): void {
    this._age = 10;
  } 
  
  public resetParams(): void {
    this._name = 'ironMan';
    this._age = 45;
  }
}