var L12_Canvas;
(function (L12_Canvas) {
    window.addEventListener("load", init);
    let objects = [];
    let nApfel = 10;
    let nLeftApple = 0;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L12_Canvas.crc2 = canvas.getContext("2d");
        // Funktionsaufrufe
        L12_Canvas.drawAllBackgrounds();
        canvas.addEventListener("click", insertNewObject);
        // Animation 
        for (let i = 0; i < nApfel; i++) {
            let apple = new L12_Canvas.Apple(Math.random() * ((L12_Canvas.crc2.canvas.width - 50) - (L12_Canvas.crc2.canvas.width - L12_Canvas.crc2.canvas.width + 50)) + (L12_Canvas.crc2.canvas.width - L12_Canvas.crc2.canvas.width + 25), Math.random() * (-800 - 200) - 200);
            apple.r = 2;
            objects.push(apple);
        }
        L12_Canvas.imageData = L12_Canvas.crc2.getImageData(0, 0, canvas.width, canvas.height);
        L12_Canvas.mixer = new L12_Canvas.Mixer(100, 600, 20);
        objects.push(L12_Canvas.mixer);
        document.querySelector("body").addEventListener("keydown", function (e) {
            //const event: KeyboardEvent = window.event ? window.event : e;
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
            //const event: KeyboardEvent = window.event ? window.event : e;
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
    }
    animate();
    function insertNewObject(_event) {
        let cx = _event.pageX;
        let cy = _event.pageY;
        let flake = new L12_Canvas.Food(cx, cy);
        flake.r = Math.random() * 4;
        objects.push(flake);
    }
    // Alle 10 Millisekunden Funktion erneut aufrufen um bewegung zu erzeugen
    function animate() {
        window.setTimeout(animate, 25);
        L12_Canvas.crc2.putImageData(L12_Canvas.imageData, 0, 0);
        moveobjects();
        drawobjects();
        whereIsMyApple();
    }
    function whereIsMyApple() {
        window.setTimeout(whereIsMyApple, 25);
        for (let i = 0; i < objects.length; i++) {
            let apple = objects[i];
            let inside = L12_Canvas.mixer.checkIfInside(apple.x, apple.y);
            if (inside) {
                objects.splice(i, 1);
                nLeftApple++;
            }
            if (nLeftApple >= nApfel) {
                alert("Glückwunsch du hast 10 Äpfel gesammelt, trinke jetzt deinen leckeren Smoothy");
                location.reload(true);
            }
        }
    }
    // Fische bewegen und zeichnen
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