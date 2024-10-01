import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css'
})
export class WatchlistComponent {
  constructor(private api:ApiService){}
  watchlist:any=""
  ngOnInit()
  {
    this.api.getWatchlist().subscribe((data:any)=>{this.watchlist=data})
  }
}
