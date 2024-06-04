window.addEventListener("load", function onWindowLoad() {
    const canvas = document.getElementById("paint-canvas");
    const ctx = canvas.getContext("2d");

    document.getElementById("square").onclick = function(){drawSquare()};
    document.getElementById("triangle").onclick = function(){drawTriangle()};
    document.getElementById("circle").onclick = function(){drawCircle()};
    document.getElementById("clear").onclick = function clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      };

    ctx.lineCap = "round";
    ctx.lineWidth = 8;
    function drawSquare(){
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, 150, 75);
    }

    function drawTriangle(){
        ctx.beginPath();
        ctx.moveTo(100,20);
        ctx.lineTo(180,100);
        ctx.lineTo(20,100);
        ctx.lineTo(100,20);
        ctx.stroke();
    }

    function drawCircle(){
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
    }

    canvas.onmousemove = function drawIfPressed (e) {
        // в "e"  попадает экземпляр MouseEvent
        var x = e.offsetX;
        var y = e.offsetY;
        var dx = e.movementX;
        var dy = e.movementY;
   
        // Проверяем зажата ли какая-нибудь кнопка мыши
        // Если да, то рисуем
        if (e.buttons > 0) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x - dx, y - dy);
          ctx.stroke();
          ctx.closePath();
        }
      };
});