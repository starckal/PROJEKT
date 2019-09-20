

var programmen = dataJSON.Program;
var i;
for(var i = 0; i < dataJSON.Personal.length; i++) {
  var lararna = lararna + "<p><button class='slide-button'>" + " " +
dataJSON.Personal[i].Förnamn + " " + dataJSON.Personal[i].Efternamn+"</button><p class='moro'>MOJDÅ JA FÖRSVINNER</p></p>";   //Loopar igenom alla förnamn och efternamn och
                                                                                                                          //sätter dem i en button

}


console.log(programmen);
console.log(lararna);