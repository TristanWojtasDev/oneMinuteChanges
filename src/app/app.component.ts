import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // this.keySelected = this.dropdownKeyService.key;
    // this.chords = this.dropdownChordsService.chords;
  } 

  // public selectedKey;
  // public keySelected() {
  //   this.chords = this.dropdownChordsService.chords.filter(
  //     chord => chord.value === this.selectedKey
  //   );
  // }
}