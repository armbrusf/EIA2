var L10_Canvas;
(function (L10_Canvas) {
    class Fish {
        drawFish() {
            L10_Canvas.crc2.fillStyle = "#FFBF00";
            L10_Canvas.crc2.beginPath();
            L10_Canvas.crc2.moveTo(this.x, this.y);
            L10_Canvas.crc2.quadraticCurveTo(this.x + 20, this.y - 40, this.x + 100, this.y);
            L10_Canvas.crc2.lineTo(this.x + 115, this.y + 20);
            L10_Canvas.crc2.lineTo(this.x + 115, this.y - 20);
            L10_Canvas.crc2.lineTo(this.x + 100, this.y);
            L10_Canvas.crc2.quadraticCurveTo(this.x + 20, this.y + 40, this.x, this.y);
            L10_Canvas.crc2.stroke();
            L10_Canvas.crc2.fill();
        }
    }
    L10_Canvas.Fish = Fish;
})(L10_Canvas || (L10_Canvas = {}));
//# sourceMappingURL=fishClass.js.map