import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
  itemImageUrl = '../assets/1.png';
  i = false;
  classes = 'special';
  @Input() childItem = '';
  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';
  constructor() { }

  ngOnInit(): void {
  }

}
