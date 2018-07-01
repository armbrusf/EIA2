namespace L11_Canvas {
    export function drawAllBackgrounds(): void {
        drawBackground();
        drawChest();
        drawGras(500, 625);
        drawGras(525, 621);
        drawGras(550, 618);
        drawGras(575, 612);
        imagedata = crc2.getImageData(0, 0, 600, 800);
    }

    function drawBackground(): void {


        // Wasser
        crc2.fillStyle = "#3686e1";
        crc2.fillRect(0, 0, 600, 800);

        // Stein
        crc2.fillStyle = "#768b99";

        crc2.beginPath();
        crc2.moveTo(0, 480);
        crc2.quadraticCurveTo(320, 450, 350, 650);
        crc2.lineTo(0, 600);
        crc2.stroke();
        crc2.fill();


        // Sand
        crc2.fillStyle = "#ae8f58";

        crc2.beginPath();
        crc2.moveTo(0, 600);
        crc2.quadraticCurveTo(150, 550, 300, 600);
        crc2.quadraticCurveTo(450, 650, 600, 600);
        crc2.lineTo(600, 800);
        crc2.lineTo(0, 800);
        crc2.fill();


    }

    //Funktion um Gras zu Zeichenen
    function drawGras(_x: number, _y: number): void {
        crc2.fillStyle = "#075709";

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x + 15, _y - 12, _x, _y - 37);
        crc2.quadraticCurveTo(_x - 10, _y - 52, _x + 5, _y - 77);
        crc2.quadraticCurveTo(_x, _y - 54, _x + 10, _y - 37);
        crc2.quadraticCurveTo(_x + 25, _y - 22, _x, _y);
        crc2.fill();
    }

    // Funktion um Schatzdruhe zu zeichnen    
    function drawChest(): void {


        crc2.fillStyle = "#7d4700";
        crc2.beginPath();
        crc2.rect(330, 570, 110, 60);
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(330, 590);
        crc2.lineTo(440, 590);
        crc2.stroke();
    }

}