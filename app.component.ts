import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true, // <-- ¡Esto es clave!
  imports: [
    RouterOutlet,
    HeaderComponent,
    LoginComponent,
    FormsModule,
    BrowserModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // <-- corregido: styleUrl → styleUrls
})
export class AppComponent {
  title = 'Pulee';
}
