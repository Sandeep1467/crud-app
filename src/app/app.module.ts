import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { HomeComponent } from './home/home.component';
import { PostFormComponent } from './post-form/post-form.component';
import { ViewPostDetailComponent } from './view-post-detail/view-post-detail.component';
import { ViewUserDetailComponent } from './view-user-detail/view-user-detail.component';


const routes:Routes =[
  {path:'users',component:UsersListComponent},
  {path:'posts',component:PostListComponent},
  {path:'posts/form',component:PostFormComponent},
  {path:'albums',component:AlbumListComponent},
  {path:'home',component:HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'posts/:id', component: ViewPostDetailComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    UsersListComponent,
    AlbumListComponent,
    HomeComponent,
    PostFormComponent,
    ViewPostDetailComponent,
    ViewUserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
