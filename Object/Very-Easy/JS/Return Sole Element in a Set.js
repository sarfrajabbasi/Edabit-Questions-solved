function elementSet(s) {
	return s.values().next().value;
}

const first = new Set();
first.add(1); 
console.log(elementSet(first),1)

const second = new Set();
second.add("apple");
console.log(elementSet(second),"apple")

const third  = new Set();
third.add(false);
console.log(elementSet(third),false)