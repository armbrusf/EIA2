var L11_Canvas;
(function (L11_Canvas) {
    class Food extends L11_Canvas.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            this.y += 2;
            if (this.y > 740) {
                this.y = 740;
            }
        }
        /*
                draw(): void {
                    crc2.beginPath();
                    crc2.moveTo(this.x - 6, this.y);
                    crc2.lineTo(this.x + 12, this.y + 12);
                    crc2.lineTo(this.x + 10, this.y - 3);
                    crc2.lineTo(this.x + 3, this.y + 20);
                    crc2.lineTo(this.x + - 3, this.y + 9);
                    crc2.lineTo(this.x - 6, this.y + 3);
                    crc2.closePath();
                    crc2.stroke();
                    crc2.fill();
                }
                */
        draw() {
            L11_Canvas.crc2.fillStyle = "#3B240B";
            L11_Canvas.crc2.beginPath();
            L11_Canvas.crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            L11_Canvas.crc2.closePath();
            L11_Canvas.crc2.stroke();
            L11_Canvas.crc2.fill();
        }
    }
    L11_Canvas.Food = Food;
})(L11_Canvas || (L11_Canvas = {}));
//# sourceMappingURL=Food.js.map