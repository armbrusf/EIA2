namespace Memory {

    let numPlayers: number;
    let numPairs: number;
    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cardPush: string[] = [];
    let cardOpen: string[] = []
    var numPairsInt: number;
    var numPlayerInt: number;
    let numCardsOpen: number = 0;
    let openArray: any[] = []
    let takenCards:any  = [];




    document.addEventListener('DOMContentLoaded', main);

    //Hauptfunktion    
    function main(): void {

        player();

        creatCardList(numPairsInt);

        enterName(numPlayerInt);

        createCards(numPairsInt);
    }


        
    function player(): number {
        var numPlayer: string = prompt("Wie viele Spieler?   min. 1 | max. 4", "");
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
    function pair(): number {
        var numPairs: string = prompt("Wieviele Kaartenparre?   min. 1 | max. 26");
        numPairsInt = parseInt(numPairs);

        if (numPairsInt >= 1 && numPairsInt <= 26) {
            return numPairsInt;

        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 26");
            pair();
        }

    }


    let amount: number = pair();



    //Spielernamen erzeugen
    function enterName(_numPlayer: number): void {
        let node: any = document.getElementById("spielernamen");
        let childNodeHTML: string;

        for (let i: number = 0; i < _numPlayer; i++) {


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
    function creatCardList(x: number): void {
        for (let i: number = 1; i <= x; i++) {
            var content: string = cardContent[0];
            cardPush.push(content);
            cardPush.push(content);

            var remove = cardContent.splice(0, 1);

        }
    }


    //Karten erstell   
    function createCards(_numPairs: number): void {
        let node: any = document.getElementById("spielfeld");
        let childNodeHTML: string;
        let i: number = 0;


        for (let i: number = 0; i < _numPairs * 2; i++) {
            let min: number = 0;
            let max: number = (cardPush.length);

            var random: number = Math.floor(Math.random() * Math.floor(max));



            childNodeHTML = "<div  class='card" + "hidden" + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += cardPush[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;

            var remove = cardPush.splice(random, 1)

            var status = document.getElementsByClassName("cardhidden")
            for (let i: number = 0; i < status.length; i++) {


                status[i].addEventListener("click", cardStatus);
            }

        }


    }
    function cardStatus(_event: MouseEvent): void {
        console.log("Test")
        let t: HTMLElement = <HTMLElement>_event.currentTarget;
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

                function compareCards(): void {
                    let karte1: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName("cardopen")[0];
                    let karte2: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName("cardopen")[1];

                    openArray.push(karte1, karte2);
                    console.log(openArray);
                    if (openArray[0].innerHTML == openArray[1].innerHTML) {

                        openArray[0].classList.remove("cardopen");
                        openArray[0].classList.add("cardtaken");


                        openArray[1].classList.remove("cardopen");
                        openArray[1].classList.add("cardtaken");

                        console.log("Kartenpaar abeglegt");



                    } else {
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
}