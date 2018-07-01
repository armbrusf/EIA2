var L11_Canvas;
(function (L11_Canvas) {
    window.addEventListener("load", init);
    let fishes = [];
    let bubbles = [];
    let n = 7;
    let imagedata;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L11_Canvas.crc2 = canvas.getContext("2d");
        console.log(L11_Canvas.crc2);
        // Funktionsaufrufe
        drawBackground();
        drawChest();
        drawGras(500, 625);
        drawGras(525, 621);
        drawGras(550, 618);
        drawGras(575, 612);
        imagedata = L11_Canvas.crc2.getImageData(0, 0, 600, 800);
        // Animation 
        for (let i = 0; i < n; i++) {
            let fish = new L11_Canvas.Fish();
            fish.x = Math.random() * L11_Canvas.crc2.canvas.width;
            fish.y = Math.random() * 500;
            fishes.push(fish);
        }
        for (let i = 0; i < 15; i++) {
            let bubble = new L11_Canvas.Bubble();
            bubble.x = Math.random() * (400 - 350) + 350;
            bubble.y = Math.random() * L11_Canvas.crc2.canvas.height - 200;
            bubble.r = Math.random() * 10;
            bubbles.push(bubble);
        }
    }
    // Funktion um alles bisschen zu Zeichenen :D
    function drawBackground() {
        // Wasser
        L11_Canvas.crc2.fillStyle = "#3686e1";
        L11_Canvas.crc2.fillRect(0, 0, 600, 800);
        // Stein
        L11_Canvas.crc2.fillStyle = "#768b99";
        L11_Canvas.crc2.beginPath();
        L11_Canvas.crc2.moveTo(0, 480);
        L11_Canvas.crc2.quadraticCurveTo(320, 450, 350, 650);
        L11_Canvas.crc2.lineTo(0, 600);
        L11_Canvas.crc2.stroke();
        L11_Canvas.crc2.fill();
        // Sand
        L11_Canvas.crc2.fillStyle = "#ae8f58";
        L11_Canvas.crc2.beginPath();
        L11_Canvas.crc2.moveTo(0, 600);
        L11_Canvas.crc2.quadraticCurveTo(150, 550, 300, 600);
        L11_Canvas.crc2.quadraticCurveTo(450, 650, 600, 600);
        L11_Canvas.crc2.lineTo(600, 800);
        L11_Canvas.crc2.lineTo(0, 800);
        L11_Canvas.crc2.fill();
    }
    //Funktion um Gras zu Zeichenen
    function drawGras(_x, _y) {
        L11_Canvas.crc2.fillStyle = "#075709";
        L11_Canvas.crc2.beginPath();
        L11_Canvas.crc2.moveTo(_x, _y);
        L11_Canvas.crc2.quadraticCurveTo(_x + 15, _y - 12, _x, _y - 37);
        L11_Canvas.crc2.quadraticCurveTo(_x - 10, _y - 52, _x + 5, _y - 77);
        L11_Canvas.crc2.quadraticCurveTo(_x, _y - 54, _x + 10, _y - 37);
        L11_Canvas.crc2.quadraticCurveTo(_x + 25, _y - 22, _x, _y);
        L11_Canvas.crc2.fill();
    }
    animate();
    // Alle 10 Millisekunden Funktion erneut aufrufen um bewegung zu erzeugen
    function animate() {
        window.setTimeout(animate, 25);
        L11_Canvas.crc2.putImageData(imagedata, 0, 0);
        moveFishes();
        drawFishes();
        moveBubbles();
        drawBubbles();
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
    function moveBubbles() {
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].move();
        }
    }
    function drawBubbles() {
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].draw();
        }
    }
    // Funktion um Schatzdruhe zu zeichnen    
    function drawChest() {
        L11_Canvas.crc2.fillStyle = "#7d4700";
        L11_Canvas.crc2.beginPath();
        L11_Canvas.crc2.rect(330, 570, 110, 60);
        L11_Canvas.crc2.fill();
        L11_Canvas.crc2.stroke();
        L11_Canvas.crc2.beginPath();
        L11_Canvas.crc2.moveTo(330, 590);
        L11_Canvas.crc2.lineTo(440, 590);
        L11_Canvas.crc2.stroke();
    }
    function ohneSinn() { }
    ;
})(L11_Canvas || (L11_Canvas = {}));
//# sourceMappingURL=Animation.js.map