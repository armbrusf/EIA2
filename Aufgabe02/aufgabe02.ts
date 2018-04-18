/* Aufgabe: Aufgabe 2
        Name: Fabio Armbruster
        Matrikel: 257708
        Datum: 22.3.2018
        Hiermit versichere ich, dass der Code in Zusammenarbeit erstellt wurde. */

namespace Memory {

    let numPlayers: number;
    let numPairs: number;
    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let cardPush: string[] = [];
    var numPairsInt: number;
    var numPlayerInt: number;


    document.addEventListener('DOMContentLoaded', main);

    function main(): void {
        player();
        creatCardList(numPairsInt);
        enterName(numPlayerInt);
        creatCards(numPairsInt);
    }


    //Spieleranzahl
    function player(): number {
        var numPlayer: string = prompt("Gewünschte Anzahl der Spieler   min. 1 | max. 4", "");
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
    function pair(): number {
        var numPairs: string = prompt("Gewünschte Anzahl der Kartenpaare   min. 1 | max. 10");
        numPairsInt = parseInt(numPairs);

        if (numPairsInt >= 1 && numPairsInt <= 10) {
            return numPairsInt;
        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 10");
            pair();
        }

    }
    let amount: number = pair();



    //Spielernamen erstellen
    function enterName(_numPlayer: number): void {
        let node: any = document.getElementById("spielernamen");
        let childNodeHTML: string;

        for (let i: number = 0; i < _numPlayer; i++) {

            childNodeHTML = "<p class='namen'>";
            childNodeHTML += "spieler " + (i + 1)
            childNodeHTML += "</p>";
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
        console.log(cardPush)
    }



    //Karten erstellen
    function creatCards(_numPairs: number): void {
        let node: any = document.getElementById("spielfeld");
        let childNodeHTML: string;
        let i: number = 0;

        for (let i: number = 0; i < _numPairs * 2; i++) {
            let min: number = 0;
            let max: number = (cardPush.length * 2);
            let randomeStatusFinal: string = randomStatus()


            var random: number = Math.floor(Math.random() * cardPush.length);
            console.log(random)
            childNodeHTML = "<div  class='card" + randomeStatusFinal + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += cardPush[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;

            cardPush.splice(random, 1)
        }
        console.log(cardPush)
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