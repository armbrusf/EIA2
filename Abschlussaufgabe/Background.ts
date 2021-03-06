namespace L12_Canvas {
    export function drawAllBackgrounds(): void {
        drawBackground();
        imageData = crc2.getImageData(0, 0, 600, 800);
    }

    function drawBackground(): void {


        // Himmel
        crc2.fillStyle = "#819FF7";
        crc2.fillRect(0, 0, 600, 800);
        
        //Baum
        crc2.fillStyle = "#298A08";
        crc2.beginPath();
        crc2.arc(290, -130,  350, 0,2 * Math.PI);
        
        crc2.lineTo(0, 0);
        crc2.fill();
        crc2.closePath;
        
        // Stamm
        crc2.fillStyle = "#3B170B";
        crc2.fillRect(160, 0, 100, 800);
        
        //Baum
        crc2.fillStyle = "#298A08";
        crc2.beginPath();
        crc2.arc(290, -250,  350, 0,2 * Math.PI);
        
        crc2.lineTo(0, 0);
        crc2.fill();
        crc2.closePath;
        
        
        
        // Berg
        crc2.fillStyle = "#298A08";

        crc2.beginPath();
        crc2.moveTo(0, 600);
        crc2.quadraticCurveTo(150, 500, 0, 600);
        crc2.quadraticCurveTo(450, 620, 600, 600);
        crc2.lineTo(600, 800);
        crc2.lineTo(0, 800);
        crc2.fill();
              
    }  
}