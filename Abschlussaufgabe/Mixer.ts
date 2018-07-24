namespace L12_Canvas {

    export class Mixer extends MovingObjects {
        dx: number;
        mixerWidth: number = 70;
        mixerHight: number = 10;

        constructor(_x: number, _y: number, _r: number) {
            super(_x, _y);
            this.x = _x;
            this.y = _y;
            this.r = _r;
            this.dx = _x;
            this.move();

        }

        move(): void {
            const speed = 20 * (600 / 800);
            let movement = 0;

            if (this.x > this.dx && this.x - this.dx > speed) movement = -speed;
            else if (this.x < this.dx && this.dx - this.x > speed) movement = speed;

            this.x += movement;

            this.draw();
        }


         move_Mixer(targetX: number): void {
            this.dx = targetX;
        }

        stop_Mixer(): void {
            this.dx = this.x;
        }
        
        checkIfInside( _x: number, _y: number ): boolean {
            if ( _x > this.x && _x < ( this.x + this.mixerWidth ) && _y > this.y && _y < this.y + this.mixerHight ) {
                return true;
                
            }
            return false;
}


        draw(): void {

            crc2.fillStyle = "#F4F8FB";
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 20);
            crc2.lineTo(this.x + 100, this.y - 20);
            crc2.lineTo(this.x + 80, this.y + 60);
            crc2.lineTo(this.x + 20, this.y + 60);
            crc2.lineTo(this.x, this.y - 20);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();

            crc2.fillStyle = "#A4A4A4";
            crc2.beginPath();
            crc2.moveTo(this.x + 20, this.y + 60);
            crc2.lineTo(this.x + 80, this.y + 60);
            crc2.quadraticCurveTo(this.x + 100, this.y + 60, this.x + 100, this.y + 80);
            crc2.lineTo(this.x + 100, this.y + 130);
            crc2.quadraticCurveTo(this.x + 100, this.y + 150, this.x + 80, this.y + 150);
            crc2.lineTo(this.x + 20, this.y + 150);
            crc2.quadraticCurveTo(this.x, this.y + 150, this.x, this.y + 130);
            crc2.lineTo(this.x, this.y + 80);
            crc2.quadraticCurveTo(this.x, this.y + 60, this.x + 20, this.y + 60);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();

            crc2.fillStyle = "#6E6E6E";
            crc2.beginPath();
            crc2.arc(this.x + 50, this.y + 105, this.r, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();

            crc2.fillStyle = "#848484";
            crc2.beginPath();
            crc2.arc(this.x + 50, this.y + 105, this.r - 10, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();


            crc2.fillStyle = "#190710";
            crc2.beginPath();
            crc2.moveTo(this.x + 50, this.y + 105);
            crc2.lineTo(this.x + 40, this.y + 105);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        }
    }
}