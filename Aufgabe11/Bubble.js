var L11_Canvas;
(function (L11_Canvas) {
    class Bubble extends L11_Canvas.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            this.y -= 2;
            if (this.y < -5) {
                this.y = 600;
            }
        }
        draw() {
            L11_Canvas.crc2.fillStyle = "#F4F8FB";
            L11_Canvas.crc2.beginPath();
            L11_Canvas.crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            L11_Canvas.crc2.closePath();
            L11_Canvas.crc2.stroke();
            L11_Canvas.crc2.fill();
        }
    }
    L11_Canvas.Bubble = Bubble;
})(L11_Canvas || (L11_Canvas = {}));
//# sourceMappingURL=Bubble.js.map