namespace Memory04 {

    export interface Deck {
        cardContent: string[];
        cssClass: string;
    }

    export interface Decks {
        [deckname: string]: Deck;
    }

    export let decks: Decks = {}

    decks["Letters"] = {
        cardContent: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
        cssClass: "letter"
    };

    decks["Animals"] = {
        cardContent: ["Dog", "Cat", "Horse", "Starfish", "Jellyfish", "Shark", "Dragon", "Lemur", "Dolphin", "Perpendicular"],
        cssClass: "animal"
    };

    decks["Actors"] = {
        cardContent: ["Leonardo DiCaprio", "Tom Hardy", "Ellen Page", "Joseph Gordon-Levitt", "Kurt Russell", "Samuel L. Jackson", "Christoph Waltz", "Orlando Bloom", "Emma Stone", "Nina Dobrev"],
        cssClass: "actors"
    };



}