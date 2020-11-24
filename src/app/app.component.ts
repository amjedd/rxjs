import { Component, OnInit } from '@angular/core';
import { Observable, observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'rxjs';
  person = {
    fullName() {
      return this.fName + ' in fullName';
    }
  };

  person1 = { fName: 'User 1' };
  person2 = { fName: 'User 2' };

  ngOnInit(): void {

    console.log(this.person.fullName.call(this.person1));
    console.log(this.person.fullName.call(this.person2));


    const obs$ = new Observable(subscriber => {
      subscriber.next(' in Observable');
    });

    obs$.subscribe(message => {
      console.log(this.person1.fName + message);
    });


    obs$.subscribe(message => {
      console.log(this.person2.fName + message);
    });


  }

}
