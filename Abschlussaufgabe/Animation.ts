namespace L12_Canvas {
    window.addEventListener("load", init);
    let objects: MovingObjects[] = [];
    let nApfel: number = 5;
    let nMixer: number = 1;
    export let imageData: ImageData;
    export let crc2: CanvasRenderingContext2D;
    export let clMixer: Mixer;



    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");



        // Funktionsaufrufe
        drawAllBackgrounds();
        canvas.addEventListener("click", insertNewObject);


        // Animation 
        for (let i: number = 0; i < nApfel; i++) {
            let apple: Apple = new Apple(Math.random() * crc2.canvas.width - 50, Math.random() * (-800 - 200) - 200);
            objects.push(apple);
            apple.r = 2
        }

        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        clMixer = new Mixer(100, 600, 20);
        objects.push(clMixer);

        document.querySelector("body").addEventListener("keydown", function(e: KeyboardEvent) {
            //const event: KeyboardEvent = window.event ? window.event : e;
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    clMixer.move_Mixer(document.querySelector('canvas').clientWidth - document.querySelector('canvas').clientWidth);
                    break;
                //rechte Pfeiltaste
                case 39:
                    clMixer.move_Mixer(document.querySelector('canvas').clientWidth - 100);
                    break;
            }
        });

        document.querySelector("body").addEventListener("keyup", function(e: KeyboardEvent) {
            //const event: KeyboardEvent = window.event ? window.event : e;
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    clMixer.stop_Mixer();
                    break;
                //rechte Pfeiltaste
                case 39:
                    clMixer.stop_Mixer();
                    break;
            }
        });

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