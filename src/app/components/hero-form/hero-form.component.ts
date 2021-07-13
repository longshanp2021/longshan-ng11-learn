import { Component, OnInit } from '@angular/core';
import { Hero } from "../../hero";
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {
  powers = ['跑得快', '跳得高', '看得远', '拿得多'];

  model = new Hero(18, 'Dr IQ', this.powers[0], '优秀');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
