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

    }





}