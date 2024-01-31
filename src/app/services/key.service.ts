import { Injectable } from '@angular/core';
import { Key } from '../Key';
import { KEYS } from '../mock-keys';

@Injectable({
  providedIn: 'root'
})
export class KeyService {

  constructor() { }

  getKeys(): Key[]{
    return KEYS;
  }
}
