namespace L10_Canvas {

    export class Fish {
        x: number;
        y: number;
        
        
        move(): void {
            this.x -= 2;
            
            if (this.x < 1) {
                this.x = 650;
            }
}

        draw(): void {
            crc2.fillStyle = "#FFBF00";

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x + 20, this.y - 40, this.x + 100, this.y);
            crc2.lineTo(this.x + 115, this.y + 20);
            crc2.lineTo(this.x + 115, this.y - 20);
            crc2.lineTo(this.x + 100, this.y);
            crc2.quadraticCurveTo(this.x + 20, this.y + 40, this.x, this.y);

            crc2.stroke();
            crc2.fill();
        }
    }
}