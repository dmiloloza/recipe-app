import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  link: string = 'recipe';

  onNavigate(parameter: string) {
    this.link = parameter;
  }
}
