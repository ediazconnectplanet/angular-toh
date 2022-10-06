import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model: Hero = {
    id: 18, 
    name: 'Dr. IQ', 
    power: this.powers[0],
    alterEgo: 'Chuck Overstreet'
  };
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = {
      id: 42,
      name: 'SkyDog',
      power: 'Fetch any object at any distance',
      alterEgo: 'Leslie Rollover'
    };
    console.log('My hero is called ' + this.model.name);
  }

}
