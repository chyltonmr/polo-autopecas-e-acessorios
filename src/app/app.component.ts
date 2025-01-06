import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms'; 




@Component({
  selector: 'app-root',
  imports: [FormsModule, InputTextModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})

export class AppComponent  {

  value!: string;
  
  }
