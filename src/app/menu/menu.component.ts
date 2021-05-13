import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Person } from '../model/Person';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	peopleList: Person[];
	pickedPerson: Person;
	newPerson: boolean = false;
	
	pickPerson(person: Person): void {
		this.pickedPerson = person;
		this.newPerson = false;
	}
	
	loadPeopleList(): void {
		this.peopleList = this.dataService.getPeopleList();
	}

	showRegisterForm(): void {
		this.newPerson = true;
		this.pickedPerson = null;
	}

	constructor(private dataService: DataService) { }

	ngOnInit(): void {
		this.loadPeopleList();
	}

}
