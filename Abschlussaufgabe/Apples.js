var L12_Canvas;
(function (L12_Canvas) {
    class Apple extends L12_Canvas.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            this.y += 4;
            if (this.y > 900) {
                this.y = Math.random() * (-800 - 200) - 200;
            }
        }
        draw() {
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
    }
    L12_Canvas.Apple = Apple;
})(L12_Canvas || (L12_Canvas = {}));
//# sourceMappingURL=Apples.js.map