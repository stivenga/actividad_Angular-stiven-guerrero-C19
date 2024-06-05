import { Component } from '@angular/core';
import { CapicuaComponent } from './capicua/capicua.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CapicuaComponent]
})
export class AppComponent {
  title = 'Angular2';
}
