import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from "@angular/flex-layout";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angGApp';
  mediaSub: Subscription;


  //constructor(public mediaObserver: MediaObserver){}

  ngOnInit(){
    // this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
    //   console.log(result.mqAlias);
    // })
  }
  ngOnDestroy(){
   // this.mediaSub.unsubscribe();
  }
}
