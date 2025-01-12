const Person = {
    name: "John Wick",
    age: 25,
    city: "Los Angeles"
};
console.log("Before Updation: ");
console.log(Person);
console.log("After Updation: ");
// Person.city = "New York";
Person["city"] = "New York";
console.log(Person);
console.log("After adding an extra property: ");
// Person.country = "USA";
Person["country"] = "USA";
console.log(Person);