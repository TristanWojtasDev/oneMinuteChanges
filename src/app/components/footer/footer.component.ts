import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  // title: string = 'OneMinuteChanges';
  
  constructor() {}

  ngOnInit(): void {
    
  }

  
  toggleStartOneMinuteChanges() {
    console.log('toggleStartOneMinuteChanges');
  }
}
