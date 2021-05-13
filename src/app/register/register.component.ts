import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Person } from '../model/Person';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  person: Person;

  @Input() newPerson: boolean; 

  constructor(private dataService: DataService) { }

  initPerson(): void {
    this.person = {
      name: "",
      age: 0,
      profilePic: ""
    }
  }

  register(): void {
    let registerStatus = this.dataService.setPerson(this.person);
    if (registerStatus) {
      this.initPerson();
    }
  }

  ngOnInit(): void {
    this.initPerson();
  }

}
