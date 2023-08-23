function moodToday(mood){
    var name = mood;
    phrase1 = "Today,I am feeling neutral";
    phrase2 = "Today,I am feeling ";
    if(name ==undefined){
        return phrase1;

    }
    return phrase2 + name;
}

function moodToday(mood){
    if(mood == undefined){
        return"Today,I am feeling neutral";
    }
    return `Today,I am feeling ${mood}`
}
console.log(moodToday("happy"), "Today, I am feeling happy")
console.log(moodToday("sad"), "Today, I am feeling sad")
console.log(moodToday("very happy"), "Today, I am feeling very happy")
console.log(moodToday("rather empty inside"), "Today, I am feeling rather empty inside")
console.log(moodToday("confused"), "Today, I am feeling confused")
console.log(moodToday(), "Today, I am feeling neutral")