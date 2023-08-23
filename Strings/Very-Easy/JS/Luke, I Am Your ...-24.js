function relationToLuke(name) {
  const obj = {
    "Darth Vader": "father",
    Leia: "sister",
    Han: "brother in law",
    R2D2: "droid",
  };
  for (let objStr in obj) {
    if (objStr === name) {
      return `Luke, I am your ${obj[objStr]}`;
    }
  }
}
console.log(relationToLuke("Darth Vader"), "Luke, I am your father.");
console.log(relationToLuke("Leia"), "Luke, I am your sister.");
console.log(relationToLuke("Han"), "Luke, I am your brother in law.");
console.log(relationToLuke("R2D2"), "Luke, I am your droid.");
