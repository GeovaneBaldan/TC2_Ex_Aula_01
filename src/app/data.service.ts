import { Injectable } from '@angular/core';
import { Person } from './model/Person';
import { PeopleList } from './model/PeopleList';

@Injectable({
	providedIn: 'root'
})
export class DataService {


	getPeopleList(): Person[] {
		return PeopleList;
	}

	setPerson(p: Person): Boolean {
		let exists = false;

		PeopleList.forEach(person => {
			if (person.name.toLowerCase() === p.name.toLowerCase()) {
				exists = true;
			}
		});

		if (exists) {
			alert("ERROR: There is already a person with the same name registered!");
			return false;
		} else {
			PeopleList.push(p);
			console.log(PeopleList);
			return true;
		}
		
	}

	constructor() { }
}
