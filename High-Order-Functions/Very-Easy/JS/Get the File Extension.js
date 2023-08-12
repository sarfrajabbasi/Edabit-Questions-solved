function getExtension(arr) {
	var newArr = [];
    for(let i=0;i<arr.length;i++){
       newArr.push(arr[i].split(".")[1])
    }
    return newArr
}
function getExtension(arr){
    return arr.map(x=>x.split(".")[1])
}
console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"]), ["jpg", "pdf", "mp3"])
console.log(getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"]), ["rb", "cpp", "py", "js"])
console.log(getExtension(["code.html", "code.css"]), ["html", "css"])
console.log(getExtension(["minesweeper.java", "game.java", "my_project.java"]), ["java", "java", "java"])