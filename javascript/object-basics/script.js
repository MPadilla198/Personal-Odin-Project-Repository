// Map to Names
// https://javascript.info/array-methods#map-to-names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(user => user.name)

alert( names ); // John, Pete, Mary

// Map to Objects

// Sort Users by Age

// Get average age

// Create Keyed Object from Array