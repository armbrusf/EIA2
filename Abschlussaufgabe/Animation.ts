namespace L12_Canvas {
    window.addEventListener("load", init);
    let objects: MovingObjects[] = [];
    let nApfel: number = 10;
    let nLeftApple: number = 0
    export let imageData: ImageData;
    export let crc2: CanvasRenderingContext2D;
    export let mixer: Mixer;



    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");



        // Funktionsaufrufe
        drawAllBackgrounds();
        canvas.addEventListener("click", insertNewObject);


        // Animation 
        for (let i: number = 0; i < nApfel; i++) {
            let apple: Apple = new Apple(Math.random() * ((crc2.canvas.width - 50) - (crc2.canvas.width - crc2.canvas.width + 50)) + (crc2.canvas.width - crc2.canvas.width + 25), Math.random() * (-800 - 200) - 200);
            apple.r = 2
            objects.push(apple);
        }

        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        mixer = new Mixer(100, 600, 20);
        objects.push(mixer);






        document.querySelector("body").addEventListener("keydown", function(e: KeyboardEvent) {
            //const event: KeyboardEvent = window.event ? window.event : e;
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    mixer.move_Mixer(document.querySelector('canvas').clientWidth - document.querySelector('canvas').clientWidth);
                    break;
                //rechte Pfeiltaste
                case 39:
                    mixer.move_Mixer(document.querySelector('canvas').clientWidth - 100);
                    break;
            }
        });

        document.querySelector("body").addEventListener("keyup", function(e: KeyboardEvent) {
            //const event: KeyboardEvent = window.event ? window.event : e;
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    mixer.stop_Mixer();
                    break;
                //rechte Pfeiltaste
                case 39:
                    mixer.stop_Mixer();
                    break;
            }
        });

        //Funktion Handy touch
        document.querySelector("body").addEventListener("touchstart", function(e: TouchEvent) {

            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;

            clkrabbe.move_Krabbe(canvasTouchPosX);
        });

        document.querySelector("body").addEventListener("touchmove", function(e: TouchEvent) {

            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;

            clkrabbe.move_Krabbe(canvasTouchPosX);
        });

        document.querySelector("body").addEventListener("touchend", function(e: TouchEvent) {
            clkrabbe.stop_Krabbe();
        });


        crc2.putImageData(imgData, 0, 0);

    }

}


animate();


function insertNewObject(_event: MouseEvent): void {
    let cx: number = _event.pageX
    let cy: number = _event.pageY;
    let flake: Food = new Food(cx, cy);
    flake.r = Math.random() * 4;
    objects.push(flake);
}




// Alle 10 Millisekunden Funktion erneut aufrufen um bewegung zu erzeugen
function animate(): void {
    window.setTimeout(animate, 25);

    crc2.putImageData(imageData, 0, 0);
    moveobjects();
    drawobjects();
    whereIsMyApple();

}

function whereIsMyApple(): void {
    window.setTimeout(whereIsMyApple, 25);
    for (let i: number = 0; i < objects.length; i++) {
        let apple = objects[i];
        let inside = mixer.checkIfInside(apple.x, apple.y);



        if (inside) {
            objects.splice(i, 1);
            nLeftApple++;
        }

        if (nLeftApple >= nApfel) {
            alert("Glückwunsch du hast 10 Äpfel gesammelt, trinke jetzt deinen leckeren Smoothy")
            location.reload(true);
        }
    }
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


}