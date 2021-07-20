import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { HomePgComponent } from './views/home-pg/home-pg.component';
import { QuizPgComponent } from './views/home-pg/quiz-pg/quiz-pg.component';

const routes: Routes = [{path:'', 
component: HomePgComponent,
children:[
  {path:'quiz/:categId/:difficultyId', 
  component:QuizPgComponent}
]},
{path:'about', 
component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

