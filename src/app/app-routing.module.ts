import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheatersComponent } from './theaters/theaters.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HomeComponent } from './home/home.component';
import { TheaterDetailsComponent } from './theater-details/theater-details.component';
import { NewsStoryComponent } from './news-story/news-story.component';
import { UpcomingMovieDetailsComponent } from './upcoming-movie-details/upcoming-movie-details.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SearchComponent } from './search/search.component';
import { ActorsComponent } from './actors/actors.component';

const routes: Routes = [
  {
    path: 'register',
     component: UserRegistrationComponent
  },{
    path: 'login',
     component: UserLoginComponent
  },{
    path: 'theater-details',
     component: TheaterDetailsComponent
  },{
    path: 'news-story',
     component: NewsStoryComponent
  },{
    path: 'upcoming-movies',
     component: UpcomingMovieDetailsComponent
  },{
    path: 'theaters',
     component: TheatersComponent
  },{
    path: 'actor',
    component: ActorsComponent
  },{
    path: 'movie-detail',
     component: MovieDetailComponent
  },{
    path: 'search',
    component: SearchComponent
  },{
    path: 'home',
     component: HomeComponent

  },{
    path: '',
     redirectTo: 'home',
      pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
