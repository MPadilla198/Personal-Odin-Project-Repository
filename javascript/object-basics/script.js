// Map to Names
// https://javascript.info/array-methods#map-to-names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(user => user.name)

alert(names); // John, Pete, Mary

// Map to Objects
// https://javascript.info/array-methods#map-to-objects
john = { name: "John", surname: "Smith", id: 1 };
pete = { name: "Pete", surname: "Hunt", id: 2 };
mary = { name: "Mary", surname: "Key", id: 3 };

users = [john, pete, mary];

let usersMapped = users.map(user => {
    return {
        fullName: `${user.name} ${user.surname}`,
        id: user.id
    }
})

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert(usersMapped[0].id) // 1
alert(usersMapped[0].fullName) // John Smith

// Sort Users by Age
// https://javascript.info/array-methods#sort-users-by-age
function sortByAge(array) {
    array.sort((a, b) => a.age - b.age)
}

john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

// Get average age
// https://javascript.info/array-methods#get-average-age
function getAverageAge(array) {
    return array.reduce((prev, user) => prev + user.age, 0) / array.length
}

john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 29 };

arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// Create Keyed Object from Array
// https://javascript.info/array-methods#create-keyed-object-from-array
function groupById(users) {
    return users.reduce((prev, user) => {
        prev[user.id] = user
        return prev
    }, {})
}

users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);
console.log(usersById)

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/