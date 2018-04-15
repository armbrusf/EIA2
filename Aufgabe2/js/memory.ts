namespace Aufgabe2 {

    //Funktion wird ausgeführt wennn DOM geladen ist.

    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let cardContentNew: string[] = [];
    let numPairsFinal: number;
    let numPlayersFinal: number;

    for (let i: number = 0; i < 200; i++) {
        console.log("1")

        let numPlayers: string = prompt("Spieleranzahl", "1-4");
        numPlayersFinal = parseInt(numPlayers);
        let numPairs: string = prompt("Kartenpaare", "1-10");
        numPairsFinal = parseInt(numPairs);


        if ((numPlayersFinal >= 1 && numPlayersFinal <= 4) && (numPairsFinal >= 1 && numPairsFinal <= 10)) {
            break;
        }
        else {
            alert("Falsche Eingabe")
            continue;
        }

    }

    function createCrads(_numPairsFinal: number): void {
        for (let i: number = 0; i < _numPairsFinal; i++) {
            let min: number = 0;
            let random: number = Math.random() * (_numPairsFinal - min);
            cardContentNew.splice(random, 0, cardContent[i]);
            cardContentNew.splice(random, 0, cardContent[i]);

        }
        console.log(cardContentNew);
    }
    createCrads(numPairsFinal);
    placeDiv(numPairsFinal);

    function placeDiv(_numPairsFinal: number): void {
        for (let i: number = 0; i < _numPairsFinal; i++) {
            let div: HTMLDivElement = document.createElement("div");
            div.innerText = cardContent[i];
            document.body.appendChild(div);
        }
    }
    
    
}



