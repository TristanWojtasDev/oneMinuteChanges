import { Component, OnInit } from '@angular/core';
import { Chord } from '../../Chord';
import { CHORDS } from '../../mock-chords';

@Component({
  selector: 'app-chords',
  templateUrl: './chords.component.html',
  styleUrl: './chords.component.css'
})
export class ChordsComponent implements OnInit{

  chords:Chord[] = CHORDS;

  constructor(){}

  ngOnInit(): void{

  }
}
