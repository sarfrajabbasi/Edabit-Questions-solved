// modify the template variable to be a template string 
function format(a, b, c) {
    // the result string must give: "Their names were: a, b and c."
        const template = `Their names were:${a }, ${b} and ${c}`
        return template
    }
console.log(format("John", "Joe", "Jack"), "Their names were: John, Joe and Jack.")
console.log(format("Peter", "Pin", "Pan"), "Their names were: Peter, Pin and Pan.")
console.log(format("E", "Da", "Bit"), "Their names were: E, Da and Bit.")
console.log(format("Bulbasaur", "Charmander", "Squirtle"), "Their names were: Bulbasaur, Charmander and Squirtle.")