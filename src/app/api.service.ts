import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

getMovies()
{
  return this.http.get("../assets/movieapi.json")
}

getWatchlist()
{
  return this.http.get("../assets/watchlist.json")
}

getseries()
{
  return this.http.get("../assets/series.json")
}

}
