import { Component } from '@angular/core';
import { CarousalsComponent } from "../../units/carousals/carousals.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarousalsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
