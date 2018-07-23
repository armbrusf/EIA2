var L12_Canvas;
(function (L12_Canvas) {
    class Food extends L12_Canvas.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            this.y += 2;
            if (this.y > 740) {
                this.y = 740;
            }
        }
        draw() {
            L12_Canvas.crc2.fillStyle = "#3B240B";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            L12_Canvas.crc2.closePath();
            L12_Canvas.crc2.stroke();
            L12_Canvas.crc2.fill();
        }
    }
    L12_Canvas.Food = Food;
})(L12_Canvas || (L12_Canvas = {}));
//# sourceMappingURL=Food.js.map