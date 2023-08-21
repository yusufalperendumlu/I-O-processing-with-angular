import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, asyncScheduler, bindCallback, defer, of, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax'

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit{

    name: string = "";
    showOverlay: boolean[] = [false,false,false,false,false];

    constructor() {
     }

      ngAfterViewInit(): void {
        asyncScheduler.schedule(() => {
          this.name = 'Alperen';  
        })
      }

    ngOnInit(): void {
     const obs1 = of(new Date());

     const obs2 = defer(() => of(new Date())) //subscribe olunulduğunda çalışır

     timer(5000).subscribe(() => {
      obs1.subscribe((data) => console.log(data))
      obs2.subscribe((data) => console.log(data))
     })

    }

    showText(index: number) {
      this.showOverlay[index] = true;
    }

    hideText(index: number) {
      this.showOverlay[index] = false;
    }

}
