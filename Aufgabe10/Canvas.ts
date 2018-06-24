namespace L10_Canvas {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        crc2.fillStyle = "rgba(255,0,0,0.5)";
        crc2.fillRect(50, 50, 100, 50);
        drawBackground()
        // Fische random verteilen
        for (let i: number = 0; i < 7; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height - 300;
            drawFish(x, y);
        }
        
        //drawFish2(200, 200);
        
        // Funktionsaufruf der Schatzkiste
        drawChest();
        
        
        // Bubbles random verteilen       
        for (let i: number = 0; i < 15; i++) {
            let x: number = Math.random() * (400-350) + 350;
            let y: number = Math.random() * crc2.canvas.height -200;
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


        //Funktionsaufruf Gras 
        drawGras(500, 625);
        drawGras(525, 621);
        drawGras(550, 618);
        drawGras(575, 612);


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
    
// Funktion um Fische zu zeichnen
    function drawFish(_x: number, _y: number): void {
        crc2.fillStyle = "#FFBF00";

        crc2.beginPath();
        crc2.moveTo(_x, _y)
        crc2.quadraticCurveTo(_x + 20, _y - 40, _x + 100, _y)
        crc2.lineTo(_x + 115, _y + 20)
        crc2.lineTo(_x + 115, _y - 20)
        crc2.lineTo(_x + 100, _y)
        crc2.quadraticCurveTo(_x + 20, _y + 40, _x, _y)


        crc2.stroke();
        crc2.fill();
    }
    
    /*function drawFish2(_x: number, _y: number): void {
        crc2.fillStyle = "#585858";
        
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x,_y,_x+10,_y+10)
        
        crc2.stroke();
        
        }
    */
    
    
    
// Funktion um Blasen zu zeichen
    function drawBubble(_x: number, _y: number, _r: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#81BEF7";
        crc2.arc(_x, _y, _r, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    
// Funktion um Schatzdruhe zu zeichnen    
function drawChest () : void {
   

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