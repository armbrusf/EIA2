var L11_Canvas;
(function (L11_Canvas) {
    window.addEventListener("load", init);
    let fishes = [];
    let bubbles = [];
    let objects = [];
    let nFish = 7;
    let nBubble = 15;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L11_Canvas.crc2 = canvas.getContext("2d");
        console.log(L11_Canvas.crc2);
        // Funktionsaufrufe
        L11_Canvas.drawAllBackgrounds();
        /* drawBackground();
         drawChest();
         drawGras(500, 625);
         drawGras(525, 621);
         drawGras(550, 618);
         drawGras(575, 612);
 
         imagedata = crc2.getImageData(0, 0, 600, 800);
 */
        // Animation 
        /*        for (let i: number = 0; i < nFish; i++) {
                    let fish: Fish = new Fish();
                    fish.x = Math.random() * crc2.canvas.width;
                    fish.y = Math.random() * 500;
                    objects.push(fish);
                }
        
        
        
                for (let i: number = 0; i < nBubble; i++) {
                    let bubble: Bubble = new Bubble();
                    //bubble.x = Math.random() * (400 - 350) + 350;
                    //bubble.y = Math.random() * crc2.canvas.height - 200;
                    //bubble.r = Math.random() * 10;
                    objects.push(bubble);
                }
                */
    }
    // Funktion um alles bisschen zu Zeichenen :D
    /* function drawBackground(): void {
 
 
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
 
 */
    animate();
    // Alle 10 Millisekunden Funktion erneut aufrufen um bewegung zu erzeugen
    function animate() {
        window.setTimeout(animate, 25);
        L11_Canvas.crc2.putImageData(L11_Canvas.imagedata, 0, 0);
        moveFishes();
        drawFishes();
        moveBubbles();
        drawBubbles();
    }
    // Fische bewegen und zeichnen
    function moveFishes() {
        for (let i = 0; i < fishes.length; i++) {
            objects[i].move();
        }
    }
    function drawFishes() {
        for (let i = 0; i < fishes.length; i++)
            objects[i].draw();
    }
    function moveBubbles() {
        for (let i = 0; i < bubbles.length; i++) {
            objects[i].move();
        }
    }
    function drawBubbles() {
        for (let i = 0; i < bubbles.length; i++) {
            objects[i].draw();
        }
    }
})(L11_Canvas || (L11_Canvas = {}));
//# sourceMappingURL=Animation.js.map