var Memory;
(function (Memory) {
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let emtyArray = [];
    let cardOpen = [];
    let numPairs;
    let numPlayer;
    let numCardsOpen = 0;
    let openArray = [];
    let takenCards = [];
    let wonCards = 0;
    document.addEventListener('DOMContentLoaded', main);
    //Hauptfunktion    
    function main() {
        player();
        creatCardList(numPairs);
        createPlayers(numPlayer);
        createCards(numPairs);
    }
    function player() {
        var numPlayerString = prompt("Wie viele Spieler?   min. 1 | max. 4", "");
        numPlayer = parseInt(numPlayerString);
        if (numPlayer >= 1 && numPlayer <= 4) {
            return numPlayer;
        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 4");
            player();
        }
    }
    //Kartenpaare eingeben
    function pair() {
        var numPairsString = prompt("Wieviele Kaartenparre?   min. 1 | max. 10");
        numPairs = parseInt(numPairsString);
        if (numPairs >= 1 && numPairs <= 10) {
            return numPairs;
        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 10");
            pair();
        }
    }
    let amount = pair();
    //Spielernamen erzeugen
    function createPlayers(_numPlayerInt) {
        let node = document.getElementById("spielernamen");
        let childNodeHTML;
        for (let i = 0; i < _numPlayerInt; i++) {
            childNodeHTML = "<div>";
            childNodeHTML += "<p class='namen'>";
            childNodeHTML += "Spieler " + (i + 1);
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
        }
    }
    //Inhalt der Karten erzeugen    
    function creatCardList(_numPairs) {
        for (let i = 1; i <= _numPairs; i++) {
            var content = cardContent[0];
            emtyArray.push(content);
            emtyArray.push(content);
            cardContent.splice(0, 1);
        }
    }
    //Karten erstell   
    function createCards(_numPairs) {
        let node = document.getElementById("spielfeld");
        let childNodeHTML;
        for (let i = 0; i < _numPairs * 2; i++) {
            var random = Math.floor(Math.random() * Math.floor(emtyArray.length));
            childNodeHTML = "<div  class='card" + "hidden" + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += emtyArray[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            emtyArray.splice(random, 1);
            var status = document.getElementsByClassName("cardhidden");
            for (let i = 0; i < status.length; i++) {
                status[i].addEventListener("click", changeStatus);
            }
        }
    }
    //Classe der Karten ändern wenn sie gedrückt werden
    function changeStatus(_event) {
        let target = _event.currentTarget;
        console.log("Was machst du für ein blödsinn?" + target);
        if (target.classList.contains("cardhidden")) {
            target.classList.remove("cardhidden");
            target.classList.add("cardopen");
            // console.log("was ist das schon wieder amk " + t.className)
            numCardsOpen++;
            if (numCardsOpen == 2) {
                setTimeout(compareCards, 1000);
            }
            if (numCardsOpen > 2) {
                target.classList.remove("cardopen");
                target.classList.add("cardhidden");
            }
        }
    }
    // Karten vergleichen
    function compareCards() {
        let karte1 = document.getElementsByClassName("cardopen")[0];
        let karte2 = document.getElementsByClassName("cardopen")[1];
        openArray.push(karte1, karte2);
        console.log(openArray);
        if (openArray[0].innerHTML == openArray[1].innerHTML) {
            openArray[0].classList.remove("cardopen");
            openArray[0].classList.add("cardtaken");
            openArray[1].classList.remove("cardopen");
            openArray[1].classList.add("cardtaken");
            console.log("Kartenpaar abeglegt");
            wonCards++;
            // Wenn alle Karten weg sind Jubeln
            if (wonCards == numPairs) {
                alert("Glückwunsch, du bist ein Genius");
                location.reload(true);
            }
        }
        else {
            openArray[0].classList.remove("cardopen");
            openArray[0].classList.add("cardhidden");
            openArray[1].classList.remove("cardopen");
            openArray[1].classList.add("cardhidden");
        }
        numCardsOpen = 0;
        openArray.splice(0, 2);
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=aufgabe04.js.map