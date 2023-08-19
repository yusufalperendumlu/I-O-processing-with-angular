import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, asyncScheduler, bindCallback } from 'rxjs';
import { ajax } from 'rxjs/ajax'

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit{

    name: string = "";

    constructor() {
     }

      ngAfterViewInit(): void {
        asyncScheduler.schedule(() => {
          this.name = 'Alperen';  
        })
      }

    ngOnInit(): void {
      // $.getJSON("https://jsonplaceholder.typicode.com/posts", (data: any) => {
      //   console.log(data);
        
      // })       
      
      const obs: (url: string) => Observable<any[]> = bindCallback($.getJSON);

      obs("https://jsonplaceholder.typicode.com/posts").subscribe(data => { console.log(data) })


    }

}
