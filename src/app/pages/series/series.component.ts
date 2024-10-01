import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  series: any;
  constructor(private api:ApiService){}
  movies:any=""
  ngOnInit()
  {
    this.api.getseries().subscribe((data:any)=>{this.series=data})
  }
}
