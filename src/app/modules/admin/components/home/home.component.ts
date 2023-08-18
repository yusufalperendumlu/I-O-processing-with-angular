import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

    constructor() {
      // const observable = new Observable<any> (data => {
      //   data.next(5);
      //   data.next(6);
      //   data.next(10);
      //   data.next("complate");
      //   data.complete(); 
      // })

      // observable.subscribe(data => {
      //   console.log(data);
        
      // })

      // let data: any = 'Alperen';
      // const subject =new BehaviorSubject(data); // bir önceki veriyi yakalayarak yazdırma
      // subject.subscribe(data => { console.log(`ObserverA ${data}`) })
      // subject.subscribe(data => { console.log(`ObserverB ${data}`) })
      // subject.next(3);
      // subject.next(5);
      // subject.subscribe(data => { console.log(`ObserverC ${data}`) } )
      // subject.next(7);
      // subject.next(9);
      // subject.next('Ahmet');

      // const subject = new ReplaySubject(2); // n tane önceki veriyi yakalayarak yazdırma
      // subject.subscribe(data => { console.log(`ObserverA ${data}`) })
      // subject.subscribe(data => { console.log(`ObserverB ${data}`) })
      // subject.next(3);
      // subject.next(5);
      // subject.subscribe(data => { console.log(`ObserverC ${data}`)});
      // subject.next(7);
      // subject.next(9);
      // subject.next('Ahmet');

      const subject = new AsyncSubject();  // akıştaki son veriyi yazdırır tek kaide complate methodunu ister
      subject.subscribe(data => { console.log(`ObserverA ${data}`) })
      subject.subscribe(data => { console.log(`ObserverB ${data}`) })
      subject.next(3);
      subject.next(5);
      subject.subscribe(data => { console.log(`ObserverC ${data}`)});
      subject.next(7);
      subject.next(9);
      subject.complete();
      subject.next('Ahmet');
      


      
     }

    ngOnInit(): void {
    }

}
