console.log("Aufgabe while-loop-text");

// Aufgabenstellung Teil 1

let myRandomText = "abc" ;

 while (myRandomText.length < 500 ) {
     
     myRandomText = myRandomText +"a" +"b"+"c"; 
     
 }
console.log(myRandomText);
 

// Aufgabenstellung Teil 2

let myRandomText1 = "abc";

while (myRandomText1.length < 50000) {
  myRandomText1 = myRandomText1 + "a" + "b" + "c";
}

console.log(myRandomText1);


console.log("Frage :Der Text soll nun mindestens 50000 Zeichen lang sein.Wie lange braucht das Programm zur Ausführung?")
console.log("Antwort: 0,087 seconds")
