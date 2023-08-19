function cityFacts(city) {
	return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`
}

console.log(cityFacts({name: 'Manila', population: '1,780,148', continent: 'Asia'}), 'Manila has a population of 1,780,148 and is situated in Asia')
console.log(cityFacts({name: 'Melbourne', population: '4,936,349', continent: 'Australia'}), 'Melbourne has a population of 4,936,349 and is situated in Australia')
console.log(cityFacts({name: 'Kampala', population: '1,507,080', continent: 'Africa'}), 'Kampala has a population of 1,507,080 and is situated in Africa')
console.log(cityFacts({name: 'Buenos Aires', population: '2,891,082', continent: 'South America'}), 'Buenos Aires has a population of 2,891,082 and is situated in South America')
console.log(cityFacts({name: 'Vancouver', population: '631,486', continent: 'North America'}), 'Vancouver has a population of 631,486 and is situated in North America')
console.log(cityFacts({name: 'Berlin', population: '3,748,148', continent: 'Europe'}), 'Berlin has a population of 3,748,148 and is situated in Europe')