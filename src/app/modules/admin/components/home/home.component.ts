import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, asyncScheduler } from 'rxjs';
import { ajax } from 'rxjs/ajax'

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
          this.name = 'Ahsen';  
        })
      }

    ngOnInit(): void {
       ajax.getJSON("https://jsonplaceholder.typicode.com/posts").subscribe(  //endpointlere istek göndermek için -> httpClient 
        data => { console.log(data) }
       )
      
    }

}
