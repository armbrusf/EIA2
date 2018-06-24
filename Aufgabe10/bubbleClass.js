var L10_Canvas;
(function (L10_Canvas) {
    class Bubble {
        move() {
            this.y -= 2;
            if (this.y < 0) {
                this.y = 250;
            }
        }
        draw() {
            L10_Canvas.crc2.beginPath();
            L10_Canvas.crc2.fillStyle = "#81BEF7";
            L10_Canvas.crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            L10_Canvas.crc2.closePath();
            L10_Canvas.crc2.stroke();
            L10_Canvas.crc2.fill();
        }
    }
    L10_Canvas.Bubble = Bubble;
})(L10_Canvas || (L10_Canvas = {}));
//# sourceMappingURL=bubbleClass.js.map