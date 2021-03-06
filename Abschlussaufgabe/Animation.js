/*
Aufgabe: Abschlussaufgabe
Name: Fabio Armbruster
Matrikel: 257708
Datum: 17.07.2018
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var L12_Canvas;
(function (L12_Canvas) {
    window.addEventListener("load", init);
    let objects = [];
    let nApple = 15;
    let nLeftApple = 0;
    alert("Sammle so schnell wie möglich alle Äpfel! Benutze die Pfeiltasten <-  -> oder den Finger um das Spiel an deinem Touchdevice zu zocken ");
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L12_Canvas.crc2 = canvas.getContext("2d");
        // Funktionsaufrufe
        L12_Canvas.drawAllBackgrounds();
        // neue Äpfel Klassen mit randome Parameter 
        for (let i = 0; i < nApple; i++) {
            let apple = new L12_Canvas.Apple(Math.random() * ((L12_Canvas.crc2.canvas.width - 50) - (L12_Canvas.crc2.canvas.width - L12_Canvas.crc2.canvas.width + 50)) + (L12_Canvas.crc2.canvas.width - L12_Canvas.crc2.canvas.width + 25), Math.random() * (-800 - 200) - 200);
            apple.r = 2;
            objects.push(apple);
        }
        L12_Canvas.imageData = L12_Canvas.crc2.getImageData(0, 0, canvas.width, canvas.height);
        L12_Canvas.mixer = new L12_Canvas.Mixer(100, 600, 20);
        objects.push(L12_Canvas.mixer);
        //Anonyme Funktion für Pfeiltasten
        document.querySelector("body").addEventListener("keydown", function (e) {
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    L12_Canvas.mixer.move_Mixer(document.querySelector('canvas').clientWidth - document.querySelector('canvas').clientWidth);
                    break;
                //rechte Pfeiltaste
                case 39:
                    L12_Canvas.mixer.move_Mixer(document.querySelector('canvas').clientWidth - 100);
                    break;
            }
        });
        document.querySelector("body").addEventListener("keyup", function (e) {
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    L12_Canvas.mixer.stop_Mixer();
                    break;
                //rechte Pfeiltaste
                case 39:
                    L12_Canvas.mixer.stop_Mixer();
                    break;
            }
        });
        //Anonyme Funktion für Touch auf dem Handy
        document.querySelector("body").addEventListener("touchstart", function (e) {
            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;
            L12_Canvas.mixer.move_Mixer(canvasTouchPosX);
        });
        document.querySelector("body").addEventListener("touchmove", function (e) {
            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;
            L12_Canvas.mixer.move_Mixer(canvasTouchPosX);
        });
        document.querySelector("body").addEventListener("touchend", function (e) {
            L12_Canvas.mixer.stop_Mixer();
        });
        L12_Canvas.crc2.putImageData(L12_Canvas.imageData, 0, 0);
    }
    animate();
    // Alle 10 Millisekunden Funktion erneut aufrufen um bewegung zu erzeugen
    function animate() {
        window.setTimeout(animate, 25);
        L12_Canvas.crc2.putImageData(L12_Canvas.imageData, 0, 0);
        drawobjects();
        moveobjects();
        whereIsMyApple();
    }
    function whereIsMyApple() {
        for (let i = 0; i < objects.length; i++) {
            let apple = objects[i];
            let inside = L12_Canvas.mixer.checkIfInside(apple.x, apple.y);
            if (inside) {
                objects.splice(i, 1);
                nLeftApple++;
            }
            if (nLeftApple >= nApple) {
                alert("Glückwunsch du hast " + nApple + " Äpfel gesammelt, trinke jetzt deinen leckeren Smoothie");
                location.reload(true);
            }
        }
    }
    //Objecte bewegen und zeichnen
    function moveobjects() {
        for (let i = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }
    function drawobjects() {
        for (let i = 0; i < objects.length; i++)
            objects[i].draw();
    }
})(L12_Canvas || (L12_Canvas = {}));
//# sourceMappingURL=Animation.js.map