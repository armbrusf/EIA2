var L10_Canvas;
(function (L10_Canvas) {
    class Bubble {
        move() {
            this.y -= 2;
            if (this.y < 0) {
                this.y = 250;
            }
        }
    }
    L10_Canvas.Bubble = Bubble;
})(L10_Canvas || (L10_Canvas = {}));
//# sourceMappingURL=bubbleClass.js.map