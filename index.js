
let myRandomText = "abc";

while (myRandomText.length < 50000) {
    myRandomText = myRandomText + "a" + "b" + "c";
}

console.log(myRandomText);