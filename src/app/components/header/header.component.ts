import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  
  title: string = 'Practice';
  
  constructor() {}

  ngOnInit(): void {
    
  }

  toggleAddTask() {
    // console.log('toggle');
  }
}
