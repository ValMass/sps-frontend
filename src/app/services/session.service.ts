import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  map: Map<string, any>;

  constructor() {

    this.map = new Map<string, any>();
  }
}
