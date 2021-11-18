let myRandomText = "abc"; // Länge: 3

// Teil 2: aus 500 -> 50000 machen
while (myRandomText.length <= 500) {
  myRandomText = myRandomText + "a" + "b" + "c";
}
console.log(myRandomText);
