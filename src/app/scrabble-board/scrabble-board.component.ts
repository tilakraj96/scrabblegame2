import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {WordDataService} from '.././word-data.service';
import { MatDialog } from '@angular/material';
import { GameoverComponent } from '../gameover/gameover.component';
import { isNullOrUndefined, isUndefined } from 'util';
import { AboutComponent } from '../about/about.component';

declare var M: any;
@Component({
  selector: 'app-scrabble-board',
  templateUrl: './scrabble-board.component.html',
  styleUrls: ['./scrabble-board.component.css'],


})
export class ScrabbleBoardComponent implements OnInit {
  selectedword='';
  wordList:string[];
  
  text1='';
  public word='';
  temp;
  p=0;
  flag=0;
  title = 'angulartoastr';
  arrayLocator='';
  firstBoard:string[][] =[
  ['','','','','','','','','','','',''],
  ['','','','','','','','','','','',''],
  ['','','','','','','','','','','',''],
  ['','','','','','','','','','','',''],
  ['','','','','','','','','','','',''],
  ['','','','','','','','','','','',''],
  ['','','','','','','','','','','',''],
  ['','','','','','','','','','','',''],
  ['','','','','','','','','','','',''],
  ['','','','','','','','','','','',''],
  ['','','','','','','','','','','',''],
  ['','','','','','','','','','','','']
];
  
  row1:number;
  column1:number; 
constructor(private data:WordDataService,public dialog:MatDialog,private toastr: ToastrService)  {}
   
interval3;
timerleft:number=600
;
timer_running:boolean=false;
//Timer for game
call:number=1;

onTimer()
{
  this.interval3 = setInterval(() => {
    this.timer_running = true;
    if(this.timerleft <= 0) 
    {   
        // if(this.score1>this.score2){
        //   this.showSuccess("Player 1 Won !","");
        // }   
        // else if(this.score1<this.score2){
        //   this.showSuccess("Player 2 Won !","");
        // }
        // else{
        //   this.showSuccess("Draw","");
        // }

        const dialogRef = this.dialog.open(GameoverComponent, {      
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');      
        });
      
    }
    else {
      this.timerleft-= 1;
    }
 
  },1000)

 
}
  // Timer 
  fst_running: boolean = false;
  scnd_running: boolean = false;
  timeLeft1: number = 30;
  timeLeft2: number = 30;
  interval1;
  interval2;

  
startTimer1(){
  this.pauseTimer2();
    this.interval1 = setInterval(() => {
      this.fst_running = true;
      if(this.timeLeft1 <= 0) 
      {
        this.timeLeft1 = 0;
        this.showError("Player 2's Turn","Time's up !");
        this.timeLeft2=30
        this.startTimer2();
      
        this.c=2;
        this.onPass();
        
      } 
      else {
        this.timeLeft1 -= 1;
      }
    },1000)
    

  }
  startTimer2() {
    this.pauseTimer1();
    this.interval2 = setInterval(() => {
      this.scnd_running = true;
      if(this.timeLeft2 <= 0) 
      { 
        this.timeLeft2=0;
        this.showError("Player 1's Turn","Time's up !");
        this.timeLeft1=30;
        this.startTimer1();
      
        this.c=1;
        this.onPass();
        
      } 
      else 
      {
        this.timeLeft2 -= 1;
      }
    },1000)
  }

  pauseTimer1() {
    if(this.fst_running)
    {
      clearInterval(this.interval1);
      this.timeLeft1 = 30;
    }
  }
  pauseTimer2() {
    if(this.scnd_running)
    {
      clearInterval(this.interval2);
      this.timeLeft2 = 30;
    }
  }


  //player : any;


  score1:number = 0;
  score2:number = 0;
  c:number = 1;
  extra=0;
  extrascore=0;
  ngOnInit() {
    
     
  }
 
  changeLabelName(lbl, val) {
    document.getElementById(lbl).innerHTML = val;
  }  
  letter='';
  
  randomText1(lbl, length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
   // this.letter+=text;
    this.temp = document.getElementById(lbl).innerHTML;
    this.word+=this.temp;
    document.getElementById(lbl).innerHTML = text;
    
  }

  randomText2(lbl, length) {
    var text = "";
    var possible = "AEIOU";
    
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
   // this.letter+=text;
    this.temp = document.getElementById(lbl).innerHTML;
    this.word+=this.temp;
    document.getElementById(lbl).innerHTML = text;
    
  }

  randomText3(lbl, length) {
    var text = "";
    var possible = "CDFGHJKLMNPQRSTVWXYZ";
    
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    //this.letter+=text;
    this.temp = document.getElementById(lbl).innerHTML;
    this.word+=this.temp;
    document.getElementById(lbl).innerHTML = text;
    
  }

  randomText4(lbl, length) {
    var text = "";
    var possible = "AEIOU";
    
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    //this.letter+=text;
    this.temp = document.getElementById(lbl).innerHTML;
    this.word+=this.temp;
    document.getElementById(lbl).innerHTML = text;
    
  }

  randomText5(lbl, length) {
    var text = "";
    var possible = "CDFGHJKLMNPQRSTVWXYZ";
    
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    //this.letter+=text;
    this.temp = document.getElementById(lbl).innerHTML;
    this.word+=this.temp;
    document.getElementById(lbl).innerHTML = text;
    
  }

  randomText6(lbl, length) {
    var text = "";
    var possible = "AEIOU";
    
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    //this.letter+=text;
    this.temp = document.getElementById(lbl).innerHTML;
    this.word+=this.temp;
    document.getElementById(lbl).innerHTML = text;
    
  }

  randomText7(lbl, length) {
    var text = "";
    var possible = "CDFGHJKLMNPQRSTVWXYZ";
    
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  //  this.letter+=text;
    this.temp = document.getElementById(lbl).innerHTML;
    this.word+=this.temp;
    document.getElementById(lbl).innerHTML = text;
    
  }
text = "";
  randomText8(lbl, length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    this.temp = document.getElementById(lbl).innerHTML;
    this.word+=this.temp;
    document.getElementById(lbl).innerHTML = text;
    

  }

  
  
  setLetter(lbl1,addscore?:number) {
    this.arrayLocator=lbl1;
    //this.arrayInitializer();
    console.log(addscore);
    
    document.getElementById(lbl1).innerHTML = this.temp;
    if(this.flag==0){
        this.extra=addscore;
        this.flag++;
        console.log(this.extra);
    }
    if(this.p==0 && this.extra!=5){
      this.showError("Invalid tile","start from center tile");
    }
    else if(this.p==0 &&this.extra==5){
      //this.showError("Invalid tile","start from center tile");
      this.p++;
    }
   // console.log(this.extra);
  this.arrayInitializer();
  }

  hs=0;
  vs=0;
  ct1=0;
  orientval=0;

  arrayInitializer(){
   var j=0,val=0;
    var i=this.arrayLocator.charCodeAt(0)-97;
    if(this.arrayLocator.length==2){
    j=parseInt(this.arrayLocator.charAt(1))-1;
    }
    else{
      j=parseInt(this.arrayLocator.substr(1))-1;
    }
    console.log(i);
    console.log(j);
    this.row1=i;
    this.column1=j;
    this.firstBoard[i][j]=this.temp;
    console.log(this.firstBoard[i][j]);
    if(val<2){
    this.orientationChecker();
    val++;
    }
  }
  
  
x=0;
y=0;
  orientationChecker(){
    
    if(this.ct1==0){
      this.x=this.row1;
      this.y=this.column1;
      this.ct1++;
    }
    else if(this.ct1==1){
      if(this.x==this.row1){
        //this.ct1=0;
        this.orientval=1
        console.log(this.orientval);
      }
      else if(this.y==this.column1){
        //this.ct1=0;
        this.orientval=0;
        console.log(this.orientval);
      }
    }
    
  }
  
  appendchecker(){
    var tempword='';
    var reverseword:string;
    console.log(this.row1);
    console.log(this.column1);
    if(this.orientval==1){
      for(var j=this.column1;this.firstBoard[this.row1][j]!='';j--){
        tempword+=this.firstBoard[this.row1][j];               
      }
      reverseword=this.reverse(tempword);
      console.log(reverseword);
    }
    else if(this.orientval==0){
      for(var i=this.row1;this.firstBoard[i][this.column1]!='';i--){
        tempword+=this.firstBoard[i][this.column1];        
      }
      reverseword=this.reverse(tempword);
      console.log(reverseword);
    }
    return reverseword;
  }

  currentWord(lbl){
    document.getElementById(lbl).innerHTML=this.word;
    if(channelArray.includes(this.word)){
      //exists in dict
    }
  }

   reverse(str:string){
    let reversed = "";    
    for (var i = str.length - 1; i >= 0; i--){        
      reversed += str[i];
    }    
    return reversed;
  }

  tm=0;
  startWord(){
    this.onTimer();
    this.word='';
    this.startTimer1();
    this.tm=1;
    
  }

  clear(){
    //this.randomText1(lblName.id, 1);
    this.word='';
  }
  

  onPass(){
    var i=0;
    this.word=this.appendchecker();
    this.ct1=0;
    if(this.data.onValidWords(this.word.toUpperCase())){
      
    if(this.c == 1){
      this.c = 2;
      this.colorpoints();
      this.flag=0;
      this.onPlayer1(this.extrascore);
      //M.toast({ html: 'Player 2 turns', classes: 'rounded' });
      this.startTimer2();
      this.word='';
    }
    else{
      this.c=1;    
      this.colorpoints();
      this.flag=0;
      this.onPlayer2(this.extrascore);
      //M.toast({ html: 'Player 1 turns', classes: 'rounded' });
      this.startTimer1();
      this.word='';
    }    
  }
    
  }

  onPlayer1(extrascore:number){
    var c:number;
      c=this.getVowels(this.word.toLowerCase());
      this.score1+=c+this.word.length+extrascore;
      this.mainscore=c+this.word.length+extrascore;
      sessionStorage.setItem('player1score',this.score1.toString());
      console.log(extrascore);
      console.log("player1 score");
      console.log(this.score1);
      this.word='';    
  }
  mainscore=0;

  onPlayer2(extrascore:number){
    var c:number;
      c=this.getVowels(this.word.toLowerCase());
      this.score2+=c+this.word.length+extrascore; 
      this.mainscore=c+this.word.length+extrascore;
      sessionStorage.setItem('player2score',this.score2.toString());   
      console.log("player2 score");
      console.log(this.score2);
      this.word='';
  }

  getVowels(str) {
    var vowelsCount = 0;
  
    //turn the input into a string
    var string = str.toString();
  
    //loop through the string
    for (var i = 0; i <= string.length - 1; i++) {
  
    //if a vowel, add to vowel count
      if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
        vowelsCount += 1;
      }
    }
    return vowelsCount;
  }


  // autoTimer(){
  //   if(this.timeLeft1==0){
  //     this.showError("Time's up !","Player 2's Turn");
  //     this.startTimer2();
  //     this.c=2;
  //     this.onPass();
  //   }
  //   else if(this.timeLeft2==0){
  //     this.showError("Time's up !","Player 1's Turn");
  //     this.startTimer1();
  //     this.c=1;
  //     this.onPass();
  //   }
  // }

  blank(lbl){
    document.getElementById(lbl).innerHTML =" ";
  }

  allRules(): void {
    const dialogRef = this.dialog.open(AboutComponent, {      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');      
    });
  }
  
  colorpoints(){
    if(this.extra==1){
      console.log(this.getVowels(this.word.toLowerCase())*2);
      this.extrascore=((this.word.length)*2)+(this.getVowels(this.word.toLowerCase())*2);
    }
    else if(this.extra==2){
      if(this.getVowels(this.word.charAt(0))>0){
        this.extrascore=4;
      }
      else{
        this.extrascore=2;
      }
    }
    else if(this.extra==3){
      this.extrascore=this.word.length+(this.getVowels(this.word.toLowerCase()));
    }
    else if(this.extra==4){
      if(this.getVowels(this.word.charAt(0))>0){
        this.extrascore=2;
      }
      else{
        this.extrascore=1;
      }
    }
  
  }
  
  showSuccess(message:string,message1:string) {
    this.toastr.success(message, message1,
    {timeOut: 5000});;
  }
  showError(message:string,message1:string) {
  this.toastr.error(message, message1, {
  timeOut: 3000
});
}
  

}

