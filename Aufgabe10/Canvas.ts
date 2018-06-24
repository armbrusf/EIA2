namespace L10_Canvas {
    window.addEventListener("load", init);
    let fishes: Fish[] = [];
    let n: number = 7;
    let imagedata : ImageData;
    export let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

// Funktionsaufrufe
        drawBackground()
        drawChest();
        drawGras(500, 625);
        drawGras(525, 621);
        drawGras(550, 618);
        drawGras(575, 612);
        
        imagedata = crc2.getImageData(0, 0, 600, 800);
        
        

        // Animation 
        for (let i: number = 0; i < n; i++) {
            let fish: Fish = new Fish();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * 500;
            fishes.push(fish);
        }

       


        // Bubbles random verteilen       
        for (let i: number = 0; i < 15; i++) {
            let x: number = Math.random() * (400 - 350) + 350;
            let y: number = Math.random() * crc2.canvas.height - 200;
            let r: number = Math.random() * 10;

            drawBubble(x, y, r);
        }
    }
    // Funktion um alles bisschen zu Zeichenen :D
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

    
    animate();
    // Alle 10 Millisekunden Funktion erneut aufrufen um bewegung zu erzeugen
    function animate(): void {
        window.setTimeout(animate, 25);

        crc2.putImageData(imagedata, 0, 0);
        moveFishes();
        drawFishes();
    }
    // Fische bewegen und zeichnen
    function moveFishes(): void {
        for (let i: number = 0; i < fishes.length; i++) {
            fishes[i].move();
        }
    }

    function drawFishes(): void {
        for (let i: number = 0; i < fishes.length; i++)
            fishes[i].draw();
    }



    // Funktion um Blasen zu zeichen
   /* function drawBubble(_x: number, _y: number, _r: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#81BEF7";
        crc2.arc(_x, _y, _r, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    
    */

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