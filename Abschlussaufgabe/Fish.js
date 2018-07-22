var L11_Canvas;
(function (L11_Canvas) {
    class Fish extends L11_Canvas.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            this.x -= 2;
            if (this.x < -110) {
                this.x = 600;
            }
        }
        draw() {
            L11_Canvas.crc2.fillStyle = "#FFBF00";
            L11_Canvas.crc2.beginPath();
            L11_Canvas.crc2.moveTo(this.x, this.y);
            L11_Canvas.crc2.quadraticCurveTo(this.x + 20, this.y - 40, this.x + 100, this.y);
            L11_Canvas.crc2.lineTo(this.x + 115, this.y + 20);
            L11_Canvas.crc2.lineTo(this.x + 115, this.y - 20);
            L11_Canvas.crc2.lineTo(this.x + 100, this.y);
            L11_Canvas.crc2.quadraticCurveTo(this.x + 20, this.y + 40, this.x, this.y);
            L11_Canvas.crc2.stroke();
            L11_Canvas.crc2.fill();
        }
    }
    L11_Canvas.Fish = Fish;
})(L11_Canvas || (L11_Canvas = {}));
//# sourceMappingURL=Fish.js.map