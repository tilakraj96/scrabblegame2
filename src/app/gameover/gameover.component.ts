import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent implements OnInit {
  score1:any;
  score2:any;
  winner:any;
  hh:any;
  constructor() { this.score1=sessionStorage.getItem('player1score');
                  this.score2=sessionStorage.getItem('player2score');
                  this.hh='-';
                  if(this.score1>this.score2){
                      this.winner="Player 1 Won !";
                  }
                  else if(this.score1<this.score2){
                    this.winner="Player 2 Won !";
                  }
                  else{
                    this.winner="Game Draw";
                  }}
  ngOnInit() {
    
  }

    
    
}
