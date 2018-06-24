var L10_Canvas;
(function (L10_Canvas) {
    window.addEventListener("load", init);
    let fishes = [];
    let n = 7;
    let imagedata;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L10_Canvas.crc2 = canvas.getContext("2d");
        console.log(L10_Canvas.crc2);
        // Funktionsaufrufe
        drawBackground();
        drawChest();
        drawGras(500, 625);
        drawGras(525, 621);
        drawGras(550, 618);
        drawGras(575, 612);
        imagedata = L10_Canvas.crc2.getImageData(0, 0, 600, 800);
        // Animation 
        for (let i = 0; i < n; i++) {
            let fish = new L10_Canvas.Fish();
            fish.x = Math.random() * L10_Canvas.crc2.canvas.width;
            fish.y = Math.random() * 500;
            fishes.push(fish);
        }
        // Bubbles random verteilen       
        for (let i = 0; i < 15; i++) {
            let x = Math.random() * (400 - 350) + 350;
            let y = Math.random() * L10_Canvas.crc2.canvas.height - 200;
            let r = Math.random() * 10;
            drawBubble(x, y, r);
        }
    }
    // Funktion um alles bisschen zu Zeichenen :D
    function drawBackground() {
        // Wasser
        L10_Canvas.crc2.fillStyle = "#3686e1";
        L10_Canvas.crc2.fillRect(0, 0, 600, 800);
        // Stein
        L10_Canvas.crc2.fillStyle = "#768b99";
        L10_Canvas.crc2.beginPath();
        L10_Canvas.crc2.moveTo(0, 480);
        L10_Canvas.crc2.quadraticCurveTo(320, 450, 350, 650);
        L10_Canvas.crc2.lineTo(0, 600);
        L10_Canvas.crc2.stroke();
        L10_Canvas.crc2.fill();
        // Sand
        L10_Canvas.crc2.fillStyle = "#ae8f58";
        L10_Canvas.crc2.beginPath();
        L10_Canvas.crc2.moveTo(0, 600);
        L10_Canvas.crc2.quadraticCurveTo(150, 550, 300, 600);
        L10_Canvas.crc2.quadraticCurveTo(450, 650, 600, 600);
        L10_Canvas.crc2.lineTo(600, 800);
        L10_Canvas.crc2.lineTo(0, 800);
        L10_Canvas.crc2.fill();
    }
    //Funktion um Gras zu Zeichenen
    function drawGras(_x, _y) {
        L10_Canvas.crc2.fillStyle = "#075709";
        L10_Canvas.crc2.beginPath();
        L10_Canvas.crc2.moveTo(_x, _y);
        L10_Canvas.crc2.quadraticCurveTo(_x + 15, _y - 12, _x, _y - 37);
        L10_Canvas.crc2.quadraticCurveTo(_x - 10, _y - 52, _x + 5, _y - 77);
        L10_Canvas.crc2.quadraticCurveTo(_x, _y - 54, _x + 10, _y - 37);
        L10_Canvas.crc2.quadraticCurveTo(_x + 25, _y - 22, _x, _y);
        L10_Canvas.crc2.fill();
    }
    animate();
    // Alle 10 Millisekunden Funktion erneut aufrufen um bewegung zu erzeugen
    function animate() {
        window.setTimeout(animate, 25);
        L10_Canvas.crc2.putImageData(imagedata, 0, 0);
        moveFishes();
        drawFishes();
    }
    // Fische bewegen und zeichnen
    function moveFishes() {
        for (let i = 0; i < fishes.length; i++) {
            fishes[i].move();
        }
    }
    function drawFishes() {
        for (let i = 0; i < fishes.length; i++)
            fishes[i].draw();
    }
    // Funktion um Blasen zu zeichen
    function drawBubble(_x, _y, _r) {
        L10_Canvas.crc2.beginPath();
        L10_Canvas.crc2.fillStyle = "#81BEF7";
        L10_Canvas.crc2.arc(_x, _y, _r, 0, 2 * Math.PI);
        L10_Canvas.crc2.closePath();
        L10_Canvas.crc2.stroke();
        L10_Canvas.crc2.fill();
    }
    // Funktion um Schatzdruhe zu zeichnen    
    function drawChest() {
        L10_Canvas.crc2.fillStyle = "#7d4700";
        L10_Canvas.crc2.beginPath();
        L10_Canvas.crc2.rect(330, 570, 110, 60);
        L10_Canvas.crc2.fill();
        L10_Canvas.crc2.stroke();
        L10_Canvas.crc2.beginPath();
        L10_Canvas.crc2.moveTo(330, 590);
        L10_Canvas.crc2.lineTo(440, 590);
        L10_Canvas.crc2.stroke();
    }
})(L10_Canvas || (L10_Canvas = {}));
//# sourceMappingURL=Canvas.js.map