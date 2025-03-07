import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ResultComponent } from './components/result/result.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormComponent,ResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoSngular';
}
