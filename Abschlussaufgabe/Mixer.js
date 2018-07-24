var L12_Canvas;
(function (L12_Canvas) {
    class Mixer extends L12_Canvas.MovingObjects {
        constructor(_x, _y, _r) {
            super(_x, _y);
            this.mixerWidth = 70;
            this.mixerHight = 10;
            this.x = _x;
            this.y = _y;
            this.r = _r;
            this.dx = _x;
            this.move();
        }
        move() {
            const speed = 20 * (600 / 800);
            let movement = 0;
            if (this.x > this.dx && this.x - this.dx > speed)
                movement = -speed;
            else if (this.x < this.dx && this.dx - this.x > speed)
                movement = speed;
            this.x += movement;
            this.draw();
        }
        move_Mixer(targetX) {
            this.dx = targetX;
        }
        stop_Mixer() {
            this.dx = this.x;
        }
        checkIfInside(_x, _y) {
            if (_x > this.x && _x < (this.x + this.mixerWidth) && _y > this.y && _y < this.y + this.mixerHight) {
                return true;
            }
            return false;
        }
        draw() {
            L12_Canvas.crc2.fillStyle = "#F4F8FB";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.moveTo(this.x, this.y - 20);
            L12_Canvas.crc2.lineTo(this.x + 100, this.y - 20);
            L12_Canvas.crc2.lineTo(this.x + 80, this.y + 60);
            L12_Canvas.crc2.lineTo(this.x + 20, this.y + 60);
            L12_Canvas.crc2.lineTo(this.x, this.y - 20);
            L12_Canvas.crc2.stroke();
            L12_Canvas.crc2.fill();
            L12_Canvas.crc2.closePath();
            L12_Canvas.crc2.fillStyle = "#A4A4A4";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.moveTo(this.x + 20, this.y + 60);
            L12_Canvas.crc2.lineTo(this.x + 80, this.y + 60);
            L12_Canvas.crc2.quadraticCurveTo(this.x + 100, this.y + 60, this.x + 100, this.y + 80);
            L12_Canvas.crc2.lineTo(this.x + 100, this.y + 130);
            L12_Canvas.crc2.quadraticCurveTo(this.x + 100, this.y + 150, this.x + 80, this.y + 150);
            L12_Canvas.crc2.lineTo(this.x + 20, this.y + 150);
            L12_Canvas.crc2.quadraticCurveTo(this.x, this.y + 150, this.x, this.y + 130);
            L12_Canvas.crc2.lineTo(this.x, this.y + 80);
            L12_Canvas.crc2.quadraticCurveTo(this.x, this.y + 60, this.x + 20, this.y + 60);
            L12_Canvas.crc2.stroke();
            L12_Canvas.crc2.fill();
            L12_Canvas.crc2.closePath();
            L12_Canvas.crc2.fillStyle = "#6E6E6E";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.arc(this.x + 50, this.y + 105, this.r, 0, 2 * Math.PI);
            L12_Canvas.crc2.stroke();
            L12_Canvas.crc2.fill();
            L12_Canvas.crc2.closePath();
            L12_Canvas.crc2.fillStyle = "#848484";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.arc(this.x + 50, this.y + 105, this.r - 10, 0, 2 * Math.PI);
            L12_Canvas.crc2.stroke();
            L12_Canvas.crc2.fill();
            L12_Canvas.crc2.closePath();
            L12_Canvas.crc2.fillStyle = "#190710";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.moveTo(this.x + 50, this.y + 105);
            L12_Canvas.crc2.lineTo(this.x + 40, this.y + 105);
            L12_Canvas.crc2.stroke();
            L12_Canvas.crc2.fill();
            L12_Canvas.crc2.closePath();
        }
    }
    L12_Canvas.Mixer = Mixer;
})(L12_Canvas || (L12_Canvas = {}));
//# sourceMappingURL=Mixer.js.map