function cloud() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(150, 100);
        ctx.lineTo(150, 500);
        ctx.lineTo(30, 150);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

    }
}