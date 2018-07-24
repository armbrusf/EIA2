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
        //Baum
        L12_Canvas.crc2.fillStyle = "#298A08";
        L12_Canvas.crc2.beginPath();
        L12_Canvas.crc2.arc(290, -130, 350, 0, 2 * Math.PI);
        L12_Canvas.crc2.lineTo(0, 0);
        L12_Canvas.crc2.fill();
        L12_Canvas.crc2.closePath;
        // Stamm
        L12_Canvas.crc2.fillStyle = "#3B170B";
        L12_Canvas.crc2.fillRect(160, 0, 100, 800);
        //Baum
        L12_Canvas.crc2.fillStyle = "#298A08";
        L12_Canvas.crc2.beginPath();
        L12_Canvas.crc2.arc(290, -250, 350, 0, 2 * Math.PI);
        L12_Canvas.crc2.lineTo(0, 0);
        L12_Canvas.crc2.fill();
        L12_Canvas.crc2.closePath;
        // Berg
        L12_Canvas.crc2.fillStyle = "#298A08";
        L12_Canvas.crc2.beginPath();
        L12_Canvas.crc2.moveTo(0, 600);
        L12_Canvas.crc2.quadraticCurveTo(150, 500, 0, 600);
        L12_Canvas.crc2.quadraticCurveTo(450, 620, 600, 600);
        L12_Canvas.crc2.lineTo(600, 800);
        L12_Canvas.crc2.lineTo(0, 800);
        L12_Canvas.crc2.fill();
        // 
        L12_Canvas.crc2.fillStyle = "#B03232";
        L12_Canvas.crc2.beginPath();
        L12_Canvas.crc2.moveTo(this.x, this.y);
        L12_Canvas.crc2.quadraticCurveTo(this.x + 10, this.y - 10, this.x + 20, this.y);
        L12_Canvas.crc2.lineTo(this.x + 20, this.y - 10);
        L12_Canvas.crc2.lineTo(this.x + 20, this.y);
        L12_Canvas.crc2.quadraticCurveTo(this.x + 30, this.y - 10, this.x + 40, this.y);
        L12_Canvas.crc2.quadraticCurveTo(this.x + 45, this.y + 40, this.x + 20, this.y + 40);
        L12_Canvas.crc2.quadraticCurveTo(this.x - 5, this.y + 40, this.x, this.y);
        L12_Canvas.crc2.stroke();
        L12_Canvas.crc2.fill();
    }
})(L12_Canvas || (L12_Canvas = {}));
//# sourceMappingURL=Background.js.map