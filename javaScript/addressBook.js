var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

function search(lastName){
    var contactsLength = contacts.length; 
    for( var i = 0; i < contactsLength; i++) {
        if( contacts[i].lastName === lastName) {
            printPerson(contacts[i]);
        }
    }
}; 
function add (firstName, lastName, email, telephone) {
var newContact = {
firstName: firstName,
lastName: lastName,
phoneNumber: telephone,
email: email
};
contacts[contacts.length] = newContact;
}

var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var telephone = prompt("What is your phone number?");
var email = prompt("What is your email?");

add(firstName, lastName, email, telephone);

list();
