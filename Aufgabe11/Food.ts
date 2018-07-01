namespace L11_Canvas {

    export class Food extends MovingObjects {
        r: number;

        constructor(_x: number, _y: number) {
            super(_x, _y);

        }

        move(): void {
            this.y += 2;

            if (this.y > 740) {
                this.y = 740;
            }

        }

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

    }
}