namespace Memory {

    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let emtyArray: string[] = [];
    let cardOpen: string[] = []
    let numPairs: number;
    let numPlayer: number;
    let numCardsOpen: number = 0;
    let openArray: any[] = []
    let takenCards: any = [];
    let wonCards: number = 0;




    document.addEventListener('DOMContentLoaded', main);

    //Hauptfunktion    
    function main(): void {

        player();

        creatCardList(numPairs);

        createPlayers(numPlayer);

        createCards(numPairs);
    }



    function player(): number {
        var numPlayerString: string = prompt("Wie viele Spieler?   min. 1 | max. 4", "");
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
    function pair(): number {
        var numPairsString: string = prompt("Wieviele Kaartenparre?   min. 1 | max. 10");
        numPairs = parseInt(numPairsString);

        if (numPairs >= 1 && numPairs <= 10) {
            return numPairs;

        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 10");
            pair();
        }

    }


    let amount: number = pair();



    //Spielernamen erzeugen
    function createPlayers(_numPlayerInt: number): void {
        let node: any = document.getElementById("spielernamen");
        let childNodeHTML: string;

        for (let i: number = 0; i < _numPlayerInt; i++) {


            childNodeHTML = "<div>";
            childNodeHTML += "<p class='namen'>";
            childNodeHTML += "Spieler " + (i + 1);
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
        }
    }




    //Inhalt der Karten erzeugen    
    function creatCardList(_numPairs: number): void {
        for (let i: number = 1; i <= _numPairs; i++) {
            var content: string = cardContent[0];
            emtyArray.push(content);
            emtyArray.push(content);

            cardContent.splice(0, 1);

        }
    }


    //Karten erstell   
    function createCards(_numPairs: number): void {
        let node: any = document.getElementById("spielfeld");
        let childNodeHTML: string;



        for (let i: number = 0; i < _numPairs * 2; i++) {

            var random: number = Math.floor(Math.random() * Math.floor(emtyArray.length));

            childNodeHTML = "<div  class='card" + "hidden" + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += emtyArray[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;

            emtyArray.splice(random, 1);

            var status = document.getElementsByClassName("cardhidden");
            for (let i: number = 0; i < status.length; i++) {


                status[i].addEventListener("click", changeStatus);
            }

        }


    }
    function changeStatus(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.currentTarget;
        console.log("Was machst du für ein blödsinn?" + target)

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
            wonCards++;
            

            if (wonCards == numPairs) {
                alert("Glückwunsch, du bist ein Genius");
                location.reload(true);
            }



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