import { Injectable } from '@angular/core';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  friends: User[];
  constructor() {
    let user1: User = {
      nick: 'Leonel',
      age: 26,
      email: 'leonelrojasperez@gmail.com',
      friend: true,
      uid: 1
    };

    let user2: User = {
      nick: 'Andrea',
      age: 26,
      email: 'andrea@gmail.com',
      friend: false,
      uid: 2
    };

    let user3: User = {
      nick: 'Esmeralda',
      age: 26,
      email: 'esmeralda@gmail.com',
      friend: true,
      uid: 3
    };

    let user4: User = {
      nick: 'Jhonny',
      age: 26,
      email: 'jhonny@gmail.com',
      friend: true,
      uid: 4
    };

    let user5: User = {
      nick: 'Fernando',
      age: 26,
      email: 'fernando@gmail.com',
      friend: true,
      uid: 5
    };

    this.friends = [user1, user2, user3, user4, user5];
  }

  getFriends() {
    return this.friends;
  }
}
