import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import{HttpClient,HttpErrorResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WordDataService {
  private content=new BehaviorSubject<string>("Default data");
  public share=this.content.asObservable();
  
  constructor(private http:HttpClient) { }
  
  updateData(text1)
  {
    this.content.next(text1);
  }

  onValidWords(word:string)
  {
    //var hasWord=false;
    return  this.http.get('assets/words.txt',{responseType:'text'}).subscribe(data=>console.log(data.includes(word)));
    //return hasWord;
  }

}
