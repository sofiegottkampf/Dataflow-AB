
//Skapa en funktion som gör två saker: ändrar färg och ändrar text.
function clickFunction(){
    //Hämta våran p tagg och spara den i en variabel
let ourText = document.querySelector("p");
// Hämta våran Div via dens IDoch sparar den i en variabel
let ourDiv = document.querySelector("#color-changer");    

// Ändra bakgrundsfärgen till ourDiv till grön
ourDiv.style.backgroundColor = "green";
// Ändra text på ourText till "jag har ändrats!"
ourText.innerText = "Jag har ändrats!";
//let ourText.innerText = ourText.innerText
}
// Koppla denna funktion till onclick

