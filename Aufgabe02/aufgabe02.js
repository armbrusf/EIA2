/* Aufgabe: Aufgabe 0
        Name: Fabio Armbruster
        Matrikel: 257708
        Datum: 22.3.2018
        Hiermit versichere ich, dass der Code in Zusammenarbeit erstellt wurde. */
var Memory;
(function (Memory) {
    let numPlayers;
    let numPairs;
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cardPush = [];
    let cardShuffle = [];
    var numPairsInt;
    var numPlayerInt;
    document.addEventListener('DOMContentLoaded', main);
    function main() {
        Player();
        creatCardList(numPairsInt);
        enterName(numPlayerInt);
        creatCards(numPairsInt);
    }
    //Spieleranzahl
    function Player() {
        var numPlayer = prompt("Gewünschte Anzahl der Spieler   min. 1 | max. 4", "");
        numPlayerInt = parseInt(numPlayer);
        if (numPlayerInt >= 1 && numPlayerInt <= 4) {
            return numPlayerInt;
        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 4");
            Player();
        }
    }
    //Kartenpaare
    function Pair() {
        var numPairs = prompt("Gewünschte Anzahl der Kartenpaare   min. 1 | max. 26");
        numPairsInt = parseInt(numPairs);
        if (numPairsInt >= 1 && numPairsInt <= 26) {
            return numPairsInt;
        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 26");
            Pair();
        }
    }
    let amount = Pair();
    //Spielernamen erstellen
    function enterName(_numPlayer) {
        let node = document.getElementById("spielernamen");
        let childNodeHTML;
        for (let i = 0; i < _numPlayer; i++) {
            childNodeHTML = "<form class='namen'>";
            childNodeHTML += "<label for='vname'=Name:>";
            childNodeHTML += "<input type='text' id='vname' name='vname'>";
            childNodeHTML += "<button class='button' type='button'>Enter</button>";
            childNodeHTML += "</label>";
            childNodeHTML += "</form>";
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
    }
    //Karten erstellen
    function creatCards(_numPairs) {
        let node = document.getElementById("spielfeld");
        let childNodeHTML;
        let i = 0;
        for (let i = 0; i < _numPairs * 2; i++) {
            let min = 0;
            let max = (cardPush.length * 2);
            var random = Math.floor(Math.random() * cardPush.length);
            childNodeHTML = "<div  class='card" + randomStatus() + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += cardPush[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
        }
    }
    //Status der Karten
    function randomStatus() {
        let randomStatus = Math.random();
        if (randomStatus <= .5) {
            return "hidden";
        }
        else if (randomStatus > .5 && randomStatus <= .75) {
            return "taken";
        }
        else if (randomStatus > .75) {
            return "visible";
        }
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=aufgabe02.js.map