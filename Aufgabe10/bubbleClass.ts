namespace L10_Canvas {

    export class Bubble {
        x: number;
        y: number;
        r: number;


        move(): void {
            this.y -= 2;

            if (this.y < 0) {
                this.y = 250;
            }

        }
        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "#81BEF7";
            crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }


    }





}