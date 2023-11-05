import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent {
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();
  @Input()
  public characterList: Character[] = [];

  onDeleteCharacter(id?: string): void {
    if(!id) return;
    this.onDeleteId.emit(id);
  }
}
