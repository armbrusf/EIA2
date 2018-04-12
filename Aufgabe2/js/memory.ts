namespace Aufgabe2 {
    //Funktion wird ausgeführt wennn DOM geladen ist.
    window.addEventListener("DOMContentLoaded", init);
    
    //init Funktion
    function init(): void {
        let cardContent : string[] = ["A","B","C","D","E","F","G","H","I","J"];
        let n : number;
        
        let numPlayers : string = prompt("Spieleranzahl","");
        let numPlayersFinal : number = parseInt(numPlayers);
        
        let numPairs : string = prompt("Kartenanzahl","");
        let numPairsFinal : number = parseInt(numPairs);
        
        let cardsCloned: string = createCards(cardContent)
        }   
        
    function createCards(_cardContent:string[]) : string[] {
        let clone : string[] = _cardContent.slice(0);
        for (let i : number = 0; i < clone.length; i++) {
            _cardContent.push(clone[i])
            }
        }
        
        
          
    }















}