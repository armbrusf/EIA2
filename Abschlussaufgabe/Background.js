var L12_Canvas;
(function (L12_Canvas) {
    function drawAllBackgrounds() {
        drawBackground();
        L12_Canvas.imageData = L12_Canvas.crc2.getImageData(0, 0, 600, 800);
    }
    L12_Canvas.drawAllBackgrounds = drawAllBackgrounds;
    function drawBackground() {
        // Himmel
        L12_Canvas.crc2.fillStyle = "#819FF7";
        L12_Canvas.crc2.fillRect(0, 0, 600, 800);
        // Baum
        L12_Canvas.crc2.fillStyle = "#3B170B";
        L12_Canvas.crc2.fillRect(40, 0, 100, 800);
        // Berg
        L12_Canvas.crc2.fillStyle = "#298A08";
        L12_Canvas.crc2.beginPath();
        L12_Canvas.crc2.moveTo(0, 600);
        L12_Canvas.crc2.quadraticCurveTo(150, 550, 0, 600);
        L12_Canvas.crc2.quadraticCurveTo(450, 300, 600, 600);
        L12_Canvas.crc2.lineTo(600, 800);
        L12_Canvas.crc2.lineTo(0, 800);
        L12_Canvas.crc2.fill();
    }
})(L12_Canvas || (L12_Canvas = {}));
//# sourceMappingURL=Background.js.map