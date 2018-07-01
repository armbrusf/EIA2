namespace L11_Canvas {
    window.addEventListener("load", init);
    let objects: MovingObjects[] = [];
    let nFish: number = 7;
    let nBubble: number = 15;
    export let imagedata: ImageData;
    export let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        // Funktionsaufrufe
        drawAllBackgrounds();


        // Animation 
        for (let i: number = 0; i < nFish; i++) {
            let fish: Fish = new Fish(Math.random() * crc2.canvas.width, Math.random() * 500);
            //fish.x = Math.random() * crc2.canvas.width;
            //fish.y = Math.random() * 500;
            objects.push(fish);
        }



       /* for (let i: number = 0; i < nBubble; i++) {
            let bubble: Bubble = new Bubble();
            //bubble.x = Math.random() * (400 - 350) + 350;
            //bubble.y = Math.random() * crc2.canvas.height - 200;
            //bubble.r = Math.random() * 10;
            objects.push(bubble);
        }
        */
        
    }
        

    animate();
    // Alle 10 Millisekunden Funktion erneut aufrufen um bewegung zu erzeugen
    function animate(): void {
        window.setTimeout(animate, 25);

        crc2.putImageData(imagedata, 0, 0);
        moveobjects();
        drawobjects();
        moveBubbles();
        drawBubbles();
    }
    // Fische bewegen und zeichnen
    function moveobjects(): void {
        for (let i: number = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }

    function drawobjects(): void {
        for (let i: number = 0; i < objects.length; i++)
            objects[i].draw();
    }

    function moveBubbles(): void {
        for (let i: number = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }

    function drawBubbles(): void {
        for (let i: number = 0; i < objects.length; i++) {
            objects[i].draw();
        }
    }
}