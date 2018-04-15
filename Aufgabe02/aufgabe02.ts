/* Aufgabe: 2 - Memory Name: Sophie Köperl Matrikel:257762 Datum: 15.04.2018 
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. */

namespace Memory {

    let numPlayers: number;
    let numPairs: number;
    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cardPush: string[] = [];
    let cardShuffle: string[] = [];
    var numPairsInt: number;
    var numPlayerInt: number;

    document.addEventListener('DOMContentLoaded', main);

    function main(): void {
        Player();
        creatCardList(numPairsInt);
        enterName(numPlayerInt);
        creatCards(numPairsInt);
    }


    //Spieleranzahl
    function Player(): number {
        var numPlayer: string = prompt("Gewünschte Anzahl der Spieler   min. 1 | max. 4", "");
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
    function Pair(): number {
        var numPairs: string = prompt("Gewünschte Anzahl der Kartenpaare   min. 1 | max. 26");
        numPairsInt = parseInt(numPairs);

        if (numPairsInt >= 1 && numPairsInt <= 26) {
            return numPairsInt;
        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 26");
            Pair();
        }

    }
    let amount: number = Pair();



    //Spielernamen erstellen
    function enterName(_numPlayer: number): void {
        let node: any = document.getElementById("spielernamen");
        let childNodeHTML: string;

        for (let i: number = 0; i < _numPlayer; i++) {

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
    function creatCardList(x: number): void {
        for (let i: number = 1; i <= x; i++) {
            var content: string = cardContent[0];
            cardPush.push(content);
            cardPush.push(content);

            var remove = cardContent.splice(0, 1);
        }
    }


    
    //Karten erstellen
    function creatCards(_numPairs: number): void {
        let node: any = document.getElementById("spielfeld");
        let childNodeHTML: string;
        let i: number = 0;

        for (let i: number = 0; i < _numPairs * 2; i++) {
            let min: number = 0;
            let max: number = (cardPush.length * 2);

            var random: number = Math.floor(Math.random() * cardPush.length);

            childNodeHTML = "<div  class='card" + randomStatus() + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += cardPush[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;

        }
    }

    

    //Status der Karten
    function randomStatus(): string {
        let randomStatus: number = Math.random();
        if (randomStatus <= .5) {
            return "hidden";
        } else if (randomStatus > .5 && randomStatus <= .75) {
            return "taken";
        } else if (randomStatus > .75) {
            return "visible";
        }
    }

}