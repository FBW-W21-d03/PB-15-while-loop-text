let myRandomText = "abc";

while (myRandomText.length < 500) {
    myRandomText = myRandomText + "abc";
}

console.log(myRandomText, " = 500\n\n");


while (myRandomText.length < 50000) {
    myRandomText = myRandomText + "abc";
}

console.log(myRandomText, " = 50000\n\n");
