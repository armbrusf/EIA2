var L11_Canvas;
(function (L11_Canvas) {
    window.addEventListener("load", init);
    let objects = [];
    let nFish = 7;
    let nBubble = 15;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L11_Canvas.crc2 = canvas.getContext("2d");
        console.log(L11_Canvas.crc2);
        // Funktionsaufrufe
        L11_Canvas.drawAllBackgrounds();
        // Animation 
        for (let i = 0; i < nFish; i++) {
            let fish = new L11_Canvas.Fish(Math.random() * L11_Canvas.crc2.canvas.width, Math.random() * 500);
            //fish.x = Math.random() * crc2.canvas.width;
            //fish.y = Math.random() * 500;
            objects.push(fish);
        }
        /* for (let i: number = 0; i < nBubble; i++) {
             let bubble: Bubble = new Bubble();
             //bubble.x = Math.random() * (400 - 350) + 350;
             //bubble.y = Math.random() * crc2.canvas.height - 200;
             //bubble.r = Math.random() * 10;
             objects.push(bubble);
         }
         */
    }
    animate();
    // Alle 10 Millisekunden Funktion erneut aufrufen um bewegung zu erzeugen
    function animate() {
        window.setTimeout(animate, 25);
        L11_Canvas.crc2.putImageData(L11_Canvas.imagedata, 0, 0);
        moveobjects();
        drawobjects();
        moveBubbles();
        drawBubbles();
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
    function moveBubbles() {
        for (let i = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }
    function drawBubbles() {
        for (let i = 0; i < objects.length; i++) {
            objects[i].draw();
        }
    }
})(L11_Canvas || (L11_Canvas = {}));
//# sourceMappingURL=Animation.js.map