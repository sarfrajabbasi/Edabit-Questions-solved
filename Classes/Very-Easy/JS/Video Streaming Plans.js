class BasicPlan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 1;
	static hasSD = true;
	static hasHD = false;
	static hasUHD = false;
	static price = '$8.99';
}
// Write the classes for StandardPlan and PremiumPlan here!
class StandardPlan extends BasicPlan{

}
class PremiumPlan extends BasicPlan{
    
}

console.log(BasicPlan.canStream, true)
console.log(BasicPlan.canDownload, true)
console.log(BasicPlan.numOfDevices, 1)
console.log(BasicPlan.hasSD, true)
console.log(BasicPlan.hasHD, false)
console.log(BasicPlan.hasUHD, false)
console.log(BasicPlan.price, '$8.99')
console.log(StandardPlan.canStream, true, 'Remember to add the StandardPlan class!')
console.log(StandardPlan.canDownload, true)
console.log(StandardPlan.numOfDevices, 2)
console.log(StandardPlan.hasSD, true)
console.log(StandardPlan.hasHD, true)
console.log(StandardPlan.hasUHD, false)
console.log(StandardPlan.price, '$12.99')
console.log(PremiumPlan.canStream, true, 'Remember to add the PremiumPlan class!')
console.log(PremiumPlan.canDownload, true)
console.log(PremiumPlan.numOfDevices, 4)
console.log(PremiumPlan.hasSD, true)
console.log(PremiumPlan.hasHD, true)
console.log(PremiumPlan.hasUHD, true)
console.log(PremiumPlan.price, '$15.99')
