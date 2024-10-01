import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovielistComponent } from './pages/movielist/movielist.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { SeriesComponent } from './pages/series/series.component';
import { SigninComponent } from './pages/signin/signin.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"movielist",component:MovielistComponent},
    {path:"watchlist",component:WatchlistComponent},
    {path:"series",component:SeriesComponent},
    {path:"signin",component:SigninComponent}
];
