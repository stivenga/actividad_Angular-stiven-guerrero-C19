import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-capicua',
  templateUrl: './capicua.component.html',
  styleUrls: ['./capicua.component.scss'],
  standalone: true,
  imports: [CommonModule] // Asegúrate de importar CommonModule
})
export class CapicuaComponent {
  numberInput: string = '';
  isCapicua: boolean = false;

  onInputChange(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.numberInput = input;
    this.isCapicua = this.checkCapicua(input);
  }

  checkCapicua(input: string): boolean {
    if (input.length < 2) {
      return false;
    }
    const reversedInput = input.split('').reverse().join('');
    return input === reversedInput;
  }
}
