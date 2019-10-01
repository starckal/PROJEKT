var programmen = dataJSON.Program;
var lararna = '';
for(var i = 0; i < dataJSON.Personal.length; i++) {
    lararna = lararna + "<p><button class='slide-button'>" + " " +
    dataJSON.Personal[i].Förnamn + " " + dataJSON.Personal[i].Efternamn+"</button><p class='moro' style='display:none'>MOJDÅ JA FÖRSVINNER</p></p>";   //Loopar igenom alla förnamn och efternamn och
                                                                                                                                  //sätter dem i en button
}
var kurs = '';
for(var i = 0; i < programmen.IA.Kurser.length; i++) { // Skriver ut kurserna på likadant sätt som lärarna skrivs ut
    kurs = kurs + "<p><button class='slide-button'>" + programmen.IA.Kurser[i].namn +"</button><p class='moro' style='display:none'>"+ "Kurskod: " + programmen.IA.Kurser[i].kurskod + "<br>" 
  + "Period: " + programmen.IA.Kurser[i].period + "<br>" + "Timmar: " +  programmen.IA.Kurser[i].timmar + "</p></p>";


  //console.log(kurs); // miksi vitussa tämä on undefined saatana perkele | haha olet tyhäm kone ja vann dig

}

 



