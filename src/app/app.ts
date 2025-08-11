import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './components/layout/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Layout],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'my-portfolio';
}
