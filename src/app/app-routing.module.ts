import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrabbleBoardComponent } from './scrabble-board/scrabble-board.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GamePlayComponent } from './game-play/game-play.component';


const routes: Routes = [
 { path: 'board' , component: ScrabbleBoardComponent },
 { path: '', component:HomePageComponent},
 {path:'allwords',component:GamePlayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ScrabbleBoardComponent,HomePageComponent,GamePlayComponent]

