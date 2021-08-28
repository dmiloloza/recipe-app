import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() paramSelected = new EventEmitter<string>();
  collapsed: boolean = true;

  constructor() {
  }

  onSelect(parameter: string) {
    this.paramSelected.emit(parameter);
  }

}
