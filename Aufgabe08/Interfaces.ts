namespace aufgabe8 {
    // Struktur des heterogenen assoziativen Arrays als Datensatz 
    export interface Studi {
        name: string;
        firstname: string;
        matrikel: number;
        age: number;
        gender: boolean;
        studiengang: string;
    }

    // Struktur des homogenen assoziativen Arrays, bei dem ein Datensatz der Matrikelnummer zugeordnet ist
    export interface Studis {
        [matrikel: string]: Studi;
    }

    // Homogenes assoziatives Array zur Speicherung eines Studierenden unter seiner Matrikelnummer
    export let studiHomoAssoc: Studis = {};
}

