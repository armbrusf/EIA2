var L11_Canvas;
(function (L11_Canvas) {
    class Food extends L11_Canvas.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            this.y += 10;
            if (this.y > 1320) {
                this.y = 1320;
            }
        }
        draw() {
            L11_Canvas.crc2.beginPath();
            L11_Canvas.crc2.moveTo(this.x - 6, this.y);
            L11_Canvas.crc2.lineTo(this.x + 12, this.y + 12);
            L11_Canvas.crc2.lineTo(this.x + 10, this.y - 3);
            L11_Canvas.crc2.lineTo(this.x + 3, this.y + 20);
            L11_Canvas.crc2.lineTo(this.x + -3, this.y + 9);
            L11_Canvas.crc2.lineTo(this.x - 6, this.y + 3);
            L11_Canvas.crc2.closePath();
            L11_Canvas.crc2.stroke();
            L11_Canvas.crc2.fill();
        }
    }
    L11_Canvas.Food = Food;
})(L11_Canvas || (L11_Canvas = {}));
//# sourceMappingURL=Food.js.map