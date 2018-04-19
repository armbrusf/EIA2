/* Aufgabe: Aufgabe 3
        Name: Fabio Armbruster
        Matrikel: 257708
        Datum: 22.3.2018
        Hiermit versichere ich, dass der Code in Zusammenarbeit erstellt wurde. */
var Aufgabe3;
(function (Aufgabe3) {
    let numPlayers;
    let numPairs;
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let cardPush = [];
    var numPairsInt;
    var numPlayerInt;
    document.addEventListener('DOMContentLoaded', main);
    function main() {
        player();
        creatCardList(numPairsInt);
        enterName(numPlayerInt);
        creatCards(numPairsInt);
    }
    //Spieleranzahl
    function player() {
        var numPlayer = prompt("Gewünschte Anzahl der Spieler   min. 1 | max. 4", "");
        numPlayerInt = parseInt(numPlayer);
        if (numPlayerInt >= 1 && numPlayerInt <= 4) {
            return numPlayerInt;
        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 4");
            player();
        }
    }
    //Kartenpaare
    function pair() {
        var numPairs = prompt("Gewünschte Anzahl der Kartenpaare   min. 1 | max. 10");
        numPairsInt = parseInt(numPairs);
        if (numPairsInt >= 1 && numPairsInt <= 10) {
            return numPairsInt;
        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 10");
            pair();
        }
    }
    let amount = pair();
    //Spielernamen erstellen
    function enterName(_numPlayer) {
        let node = document.getElementById("spielernamen");
        let childNodeHTML;
        for (let i = 0; i < _numPlayer; i++) {
            childNodeHTML = "<p class='namen'>";
            childNodeHTML += "spieler " + (i + 1);
            childNodeHTML += "</p>";
            node.innerHTML += childNodeHTML;
        }
    }
    //Inhalt erstellen
    function creatCardList(x) {
        for (let i = 1; i <= x; i++) {
            var content = cardContent[0];
            cardPush.push(content);
            cardPush.push(content);
            var remove = cardContent.splice(0, 1);
        }
        console.log(cardPush);
    }
    //Karten erstellen
    function creatCards(_numPairs) {
        let node = document.getElementById("spielfeld");
        let childNodeHTML;
        let i = 0;
        for (let i = 0; i < _numPairs * 2; i++) {
            let min = 0;
            let max = (cardPush.length * 2);
            //let randomeStatusFinal: string = randomStatus()
            let randomeStatusFinal = "hidden";
            var random = Math.floor(Math.random() * cardPush.length);
            console.log(random);
            childNodeHTML = "<div  class='card" + randomeStatusFinal + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += cardPush[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            let divListener = document.getElementsByClassName("cardhidden");
            for (let i2 = 0; i2 < divListener.length; i2++) {
                divListener[i2].addEventListener("click", cardStatus);
            }
            cardPush.splice(random, 1);
        }
        console.log(cardPush);
    }
    //Status der Karten
    function cardStatus() {
        console.log("Es funktioniert");
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=aufgabe03.js.map