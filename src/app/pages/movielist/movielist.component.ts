import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-movielist',
  standalone: true,
  imports: [],
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {
  constructor(private api:ApiService){}
  movies:any=""
  ngOnInit()
  {
    this.api.getMovies().subscribe((data:any)=>{this.movies=data})
  }
  
}
