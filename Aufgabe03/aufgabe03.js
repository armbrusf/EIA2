var Memory;
(function (Memory) {
    let numPlayers;
    let numPairs;
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cardPush = [];
    let cardOpen = [];
    var numPairsInt;
    var numPlayerInt;
    let numCardsOpen = 0;
    let openArray = [];
    let takenCards = [];
    document.addEventListener('DOMContentLoaded', main);
    //Hauptfunktion    
    function main() {
        player();
        creatCardList(numPairsInt);
        enterName(numPlayerInt);
        createCards(numPairsInt);
    }
    function player() {
        var numPlayer = prompt("Wie viele Spieler?   min. 1 | max. 4", "");
        numPlayerInt = parseInt(numPlayer);
        if (numPlayerInt >= 1 && numPlayerInt <= 4) {
            return numPlayerInt;
        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 4");
            player();
        }
    }
    //Kartenpaare eingeben
    function pair() {
        var numPairs = prompt("Wieviele Kaartenparre?   min. 1 | max. 26");
        numPairsInt = parseInt(numPairs);
        if (numPairsInt >= 1 && numPairsInt <= 26) {
            return numPairsInt;
        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 26");
            pair();
        }
    }
    let amount = pair();
    //Spielernamen erzeugen
    function enterName(_numPlayer) {
        let node = document.getElementById("spielernamen");
        let childNodeHTML;
        for (let i = 0; i < _numPlayer; i++) {
            childNodeHTML = "<div>";
            childNodeHTML += "<h2>";
            childNodeHTML += "<p class='namen'>";
            childNodeHTML += "Player " + i;
            childNodeHTML += "</p>";
            childNodeHTML += "</h2>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
        }
    }
    //Inhalt der Karten erzeugen    
    function creatCardList(x) {
        for (let i = 1; i <= x; i++) {
            var content = cardContent[0];
            cardPush.push(content);
            cardPush.push(content);
            var remove = cardContent.splice(0, 1);
        }
    }
    //Karten erstell   
    function createCards(_numPairs) {
        let node = document.getElementById("spielfeld");
        let childNodeHTML;
        let i = 0;
        for (let i = 0; i < _numPairs * 2; i++) {
            let min = 0;
            let max = (cardPush.length);
            var random = Math.floor(Math.random() * Math.floor(max));
            childNodeHTML = "<div  class='card" + "hidden" + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += cardPush[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            var remove = cardPush.splice(random, 1);
            var status = document.getElementsByClassName("cardhidden");
            for (let i = 0; i < status.length; i++) {
                status[i].addEventListener("click", cardStatus);
            }
        }
    }
    function cardStatus(_event) {
        console.log("Test");
        let t = _event.currentTarget;
        if (numCardsOpen >= 0 && numCardsOpen < 2) {
            if (t.className = "hidden") {
                if (!(numCardsOpen > 2)) {
                    if (t.className = "cardhidden") {
                        t.classList.remove("cardhidden");
                        t.classList.add("cardopen");
                        numCardsOpen++;
                    }
                }
                if (numCardsOpen == 2) {
                    setTimeout(compareCards, 1500);
                }
                if (numCardsOpen > 2) {
                    t.classList.remove("cardopen");
                    t.classList.add("cardhidden");
                }
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
            }
        }
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=aufgabe03.js.map