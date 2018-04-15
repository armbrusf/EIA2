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
        if ((numPlayersFinal >= 1 && numPlayersFinal <= 4) && (numPairsFinal >= 1 && numPairsFinal <= 10)) {
            break;
        }
        else {
            alert("Falsche Eingabe");
            continue;
        }
    }
    function createCrads(_numPairsFinal) {
        for (let i = 0; i < _numPairsFinal; i++) {
            let min = 0;
            let random = Math.random() * (_numPairsFinal - min);
            cardContentNew.splice(random, 0, cardContent[i]);
            cardContentNew.splice(random, 0, cardContent[i]);
        }
        console.log(cardContentNew);
    }
    createCrads(numPairsFinal);
    placeDiv(numPairsFinal);
    function placeDiv(_numPairsFinal) {
        for (let i = 0; i < _numPairsFinal; i++) {
            let div = document.createElement("div");
            div.innerText = cardContent[i];
            document.body.appendChild(div);
        }
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=memory.js.map