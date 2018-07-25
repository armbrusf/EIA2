namespace L12_Canvas {
    window.addEventListener("load", init);
    let objects: MovingObjects[] = [];
    let nApple: number = 15;
    let nLeftApple: number = 0
    export let imageData: ImageData;
    export let crc2: CanvasRenderingContext2D;
    export let mixer: Mixer;
    alert("Sammle so schnell wie möglich alle Äpfel! Benutze die Pfeiltasten <-  -> oder den Finger um das Spiel an deinem Touchdevice zu zocken ")




    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        

        // Funktionsaufrufe
        drawAllBackgrounds();



        // neue Äpfel Klassen mit randome Parameter 
        for (let i: number = 0; i < nApple; i++) {
            let apple: Apple = new Apple(Math.random() * ((crc2.canvas.width - 50) - (crc2.canvas.width - crc2.canvas.width + 50)) + (crc2.canvas.width - crc2.canvas.width + 25), Math.random() * (-800 - 200) - 200);
            apple.r = 2
            objects.push(apple);
        }

        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        mixer = new Mixer(100, 600, 20);
        objects.push(mixer);





        //Anonyme Funktion für Pfeiltasten
        document.querySelector("body").addEventListener("keydown", function(e: KeyboardEvent) {
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

        //Anonyme Funktion für Touch auf dem Handy
        document.querySelector("body").addEventListener("touchstart", function(e: TouchEvent) {

            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;

            mixer.move_Mixer(canvasTouchPosX);
        });

        document.querySelector("body").addEventListener("touchmove", function(e: TouchEvent) {

            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;

            mixer.move_Mixer(canvasTouchPosX);
        });

        document.querySelector("body").addEventListener("touchend", function(e: TouchEvent) {
            mixer.stop_Mixer();
        });


        crc2.putImageData(imageData, 0, 0);

    }




    animate();






    // Alle 10 Millisekunden Funktion erneut aufrufen um bewegung zu erzeugen
    function animate(): void {
        window.setTimeout(animate, 25);

        crc2.putImageData(imageData, 0, 0);
        
        drawobjects();
        moveobjects();
        whereIsMyApple();

    }

    function whereIsMyApple(): void {
        for (let i: number = 0; i < objects.length; i++) {
            let apple = objects[i];
            let inside = mixer.checkIfInside(apple.x, apple.y);



            if (inside) {
                objects.splice(i, 1);
                nLeftApple++;
            }

            if (nLeftApple >= nApple) {

                alert("Glückwunsch du hast " + nApple + " Äpfel gesammelt, trinke jetzt deinen leckeren Smoothie");
                location.reload(true);

            }
        }
    }

    //Objecte bewegen und zeichnen
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