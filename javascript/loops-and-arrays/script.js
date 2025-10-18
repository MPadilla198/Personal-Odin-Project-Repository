// https://javascript.info/array-methods#translate-border-left-width-to-borderleftwidth
function camelize(str) {
    let strings = str.split("-")
    let camelCased = strings.slice(1).map((string) => {
        string = string.toLowerCase()
        return string.substr(0,1).toUpperCase() + string.substr(1)
    });
    return strings[0] + camelCased.join("")
}

// Test
console.log(camelize("background-color"))
console.assert(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image"))
console.assert(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition"))
console.assert(camelize("-webkit-transition") == 'WebkitTransition');
