namespace L12_Canvas {

    export class Apple extends MovingObjects {
        r : number;
        

        constructor(_x: number, _y: number) {
            super(_x, _y);            
        }

        
        move(): void {
            this.y += 2;

            if (this.y > 900) {
                this.y = Math.random() * (-800 - 200) - 200;
            }
        }
        
        

        
        

        draw(): void {
            crc2.fillStyle = "#B03232";

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x + 10, this.y - 10, this.x + 20, this.y);
            crc2.lineTo(this.x + 20, this.y -10);
            crc2.lineTo(this.x + 20, this.y);            
            crc2.quadraticCurveTo(this.x + 30, this.y - 10, this.x + 40, this.y);
            crc2.quadraticCurveTo(this.x + 45, this.y  + 40, this.x + 20, this.y +40);
            crc2.quadraticCurveTo(this.x - 5, this.y  + 40, this.x, this.y);           
            //crc2.quadraticCurveTo(this.x + 20, this.y + 40, this.x - 1, this.y);
            //crc2.lineTo(this.x + 115, this.y + 20);
            //crc2.lineTo(this.x + 115, this.y - 20);
            //crc2.lineTo(this.x + 100, this.y);
            //crc2.quadraticCurveTo(this.x + 20, this.y + 40, this.x, this.y);
            crc2.stroke();
            crc2.fill();
        }
    }


}