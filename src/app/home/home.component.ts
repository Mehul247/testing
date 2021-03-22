import { Component, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() data = new EventEmitter();
  public stateValue: string = 'state value';
  public welcome: string;
  public isLoggedIn: string = 'a';
  public isLoggedInArrary = ['a'];
  public Object1 = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      area: 20,
      wallColor: 'white',
    },
  };
 public Object2 = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      area: 20,
      wallColor: 'white',
    },
  };
  public stateValueNull: string = null;
  public stateValueUndefine;
  public toBeNaN = 0 / 0;
  public toBeLessThanValu: number = 5;

  constructor() { }

  ngOnInit(): void {
    this.welcome = this.isLoggedIn;
  }

  name(name) {
    return 'Welcome ' + name + '!';
  }

  ArrayList() {
    return ['first name', 'last name', 'middle name'];
  }

  emitToParent() {
    this.data.emit('true');
  }

}
