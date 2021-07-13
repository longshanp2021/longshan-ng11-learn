import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-template-statement',
  templateUrl: './template-statement.component.html',
  styleUrls: ['./template-statement.component.scss']
})
export class TemplateStatementComponent implements OnInit {

  onSave(event?: MouseEvent) {
    const evtMsg = event ? ' Event target is ' + (event.target as HTMLElement).textContent : '';
    alert('Saved.' + evtMsg);
    if (event) { event.stopPropagation(); }

    // deleteHero(hero ?: Hero) {
    //   alert(`Delete ${hero ? hero.name : 'the hero'}.`);
    // } 
  }
  deleteHero(hero?: Hero) {
    alert(`Delete ${hero ? hero.name : 'the hero'}`)
  }
  constructor() {

  }

  ngOnInit(): void {
  }

}
