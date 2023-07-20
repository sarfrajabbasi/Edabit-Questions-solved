function relationToLuke(name){
    var relations;
switch (name) {
    case "Darth Vader":
        relations = "Luke I am your father";
        
        break;
    case "Leia":
        relations = "Luke I am your sister";
        
        break;
    case "Han":
        relations = "Luke I am your brother in law";
        
        break;
    case "R2D2":
        relations = "Luke I am your droid";
        
        break;

    default:"Invlaid"
        break;
}
return relations;
}
function relationToLuke(name){
    var person = [
        {
            name :"Darth Vader",
            relation : "father"
        }, {
            name :"Leia",
            relation : "sister"
        }, {
            name :"Han",
            relation : "brother in law"
        }, {
            name :"R2D2",
            relation : "droid"
        },{
            name :"single",
            relation : "randwa dosth"
        },
        
    ];
  var val;
    for(let i=0;i<person.length;i++){
        if(person[i].name == name){
            val = `Luke, I am your ${person[i].relation}.`
        }
    };
    return val
}

console.log(relationToLuke("Darth Vader"), "Luke, I am your father.")
console.log(relationToLuke("Leia"), "Luke, I am your sister.")
console.log(relationToLuke("Han"), "Luke, I am your brother in law.")
console.log(relationToLuke("R2D2"), "Luke, I am your droid.")
console.log(relationToLuke("single"), "Luke, I am your randwa dosth.")