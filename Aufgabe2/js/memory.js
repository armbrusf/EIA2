var Aufgabe2;
(function (Aufgabe2) {
    //Funktion wird ausgeführt wennn DOM geladen ist.
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let cardContentNew = [];
    let numPairsFinal;
    let numPlayersFinal;
    for (let i = 0; i < 200; i++) {
        console.log("1");
        let numPlayers = prompt("Spieleranzahl", "1-4");
        numPlayersFinal = parseInt(numPlayers);
        let numPairs = prompt("Kartenpaare", "1-10");
        numPairsFinal = parseInt(numPairs);
        if ((numPlayersFinal == 1 || numPlayersFinal == 2 || numPlayersFinal == 3 || numPlayersFinal == 4) && (numPairsFinal == 1 || numPairsFinal == 2 || numPairsFinal == 3 || numPairsFinal == 4
            || numPairsFinal == 5 || numPairsFinal == 6 || numPairsFinal == 7 || numPairsFinal == 8
            || numPairsFinal == 9 || numPairsFinal == 10)) {
            break;
        }
        else {
            alert("Falsche Eingabe");
            continue;
        }
    }
    function createCrads(_numPairsFinal) {
        for (let i = 0; i < _numPairsFinal; i++) {
            cardContentNew.splice(0, 0, cardContent[i]);
            cardContentNew.splice(1, 0, cardContent[i]);
        }
        console.log(cardContentNew);
    }
    createCrads(numPlayersFinal);
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=memory.js.map