import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor'];
  public deleteHero?: string = '';

  public removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
  }
}
