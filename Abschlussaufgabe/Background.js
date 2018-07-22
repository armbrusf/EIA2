var L11_Canvas;
(function (L11_Canvas) {
    function drawAllBackgrounds() {
        drawBackground();
        drawChest();
        drawGras(500, 625);
        drawGras(525, 621);
        drawGras(550, 618);
        drawGras(575, 612);
        L11_Canvas.imagedata = L11_Canvas.crc2.getImageData(0, 0, 600, 800);
    }
    L11_Canvas.drawAllBackgrounds = drawAllBackgrounds;
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
})(L11_Canvas || (L11_Canvas = {}));
//# sourceMappingURL=Background.js.map