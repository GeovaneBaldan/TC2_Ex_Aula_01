import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../model/Person';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() person: Person;

  constructor() { }

  ngOnInit(): void {
  }

}
