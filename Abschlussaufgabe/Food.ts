namespace L12_Canvas {

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

            crc2.fillStyle = "#3B240B";
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
        

    }
}