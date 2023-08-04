function getContainer(product) {
	let container
  switch (product) {
		case "Bread":
			container = "bag"
            break
		case "Beer":
		case "Milk":
			container = "bottle"
			break
		case "Cerials":
			container = "box"
			break
		case "Eggs":
			container = "carton"
			break
		case "Candy":
			container = "plastic"
            break
		default:
			container = null
	}

	return container
}

console.log(getContainer("Bread"), "bag")
console.log(getContainer("Milk"), "bottle")
console.log(getContainer("Beer"), "bottle")
console.log(getContainer("Eggs"), "carton")
console.log(getContainer("Candy"), "plastic")
console.log(getContainer("Cheese"), null)