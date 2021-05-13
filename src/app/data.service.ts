import { Injectable } from '@angular/core';
import { Person } from './model/Person';
import { PeopleList } from './model/PeopleList';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	defaultImg: string = "https://media.istockphoto.com/photos/programmer-dog-coding-with-laptop-picture-id1214326150?k=6&m=1214326150&s=170667a&w=0&h=YgAz5QUyOgNb1LLL1_5cKBHMXgKgXdOrl7kwgoJG4BM=";

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
		} else if (p.name === "") {
			alert("ERROR: You need to enter a name!");
			return false;

		} else {

			if (p.profilePic === "") 
				p.profilePic = this.defaultImg;

			PeopleList.push(p);

			alert("Successful registration!");
			return true;
		}
		
	}

	constructor() { }
}
