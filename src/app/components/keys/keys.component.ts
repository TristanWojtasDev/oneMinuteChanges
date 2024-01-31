import { Component, OnInit } from '@angular/core';
import { KeyService } from '../../services/key.service';
import { Key } from '../../Key';
import { KEYS } from '../../mock-keys';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrl: './keys.component.css'
})
export class KeysComponent implements OnInit {

  keys:Key[] = [];

  constructor(private keyService:KeyService){}

  ngOnInit(): void{
    this.keys = this.keyService.getKeys();
  }
}
