var L04_Interfaces;
(function (L04_Interfaces) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let mtrSearchButton = document.getElementById("mtrSearchButton");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        mtrSearchButton.addEventListener("click", searchMtr);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let genderButton = document.getElementById("male");
        let matrikel = inputs[2].value;
        let courseOfStudie = document.getElementById("select");
        let studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            courseOfStudies: courseOfStudie.value,
            age: parseInt(inputs[3].value),
            gender: genderButton.checked
        };
        console.log(studi);
        console.log(studi.age);
        console.log(studi["age"]);
        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        L04_Interfaces.studiHomoAssoc[matrikel] = studi;
        // nur um das auch noch zu zeigen...
        L04_Interfaces.studiSimpleArray.push(studi);
    }
    function refresh(_event) {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (let matrikel in L04_Interfaces.studiHomoAssoc) {
            let studi = L04_Interfaces.studiHomoAssoc[matrikel];
            let line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            output.value += line + "\n";
        }
    }
    function searchMtr(_event) {
        let n = 0;
        let output = document.getElementsByTagName("textarea")[1];
        let mtrNumb = document.getElementById("mtrSearch");
        output.value = "";
        for (let matrikel in L04_Interfaces.studiHomoAssoc) {
            let studi = L04_Interfaces.studiHomoAssoc[matrikel];
            let line = matrikel + ": ";
            let lengthstudiHomoAssoc = L04_Interfaces.studiSimpleArray.length;
            console.log("Zahl " + L04_Interfaces.studiSimpleArray.length);
            if (mtrNumb.value == studi.matrikel.toString()) {
                line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
                line += studi.gender ? "(M)" : "(F)";
                output.value += line + "\n";
            }
            else if ((lengthstudiHomoAssoc - 1) == n) {
                let info = "kein Student vorhanden";
                output.value += info + "\n";
                n = 0;
            }
            else {
                n++;
            }
            console.log("Zählvariable: " + n);
            console.log("Abbruch:" + lengthstudiHomoAssoc);
        }
    }
})(L04_Interfaces || (L04_Interfaces = {}));
//# sourceMappingURL=ProcessForm.js.map