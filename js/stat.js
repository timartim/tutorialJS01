window.renderStatistics = function (ctx, names, times) {
    console.log(ctx);
    console.log(names);
    console.log(times);
    cloud();
}
var cloud = function (ctx) {
    //var canvas = document.getElementById('canvas');
    //if (canvas.getContext) {
        //var ctx = canvas.getContext('2d');
        var times = new Array();
        var names = new Array();
        var score = new Array();
        var scoreondiagram = new Array();
        names[0] = "you";
        names[1] = "1 player";
        names[2] = "2 player";
        names[3] = "3 player";
        times[0] = performance.now() - time;
        times[1] = performance.now() - time;
        times[2] = performance.now() - time;
        times[3] = performance.now() - time;
        for (var i=0; i<5; i++){  
            score[i]= Math.floor(Math.random() * (1500 - 1)) +1;
            scoreondiagram[i] =score[i]/ 100;
        }
        var x = 165;
        var y = 50;

    
        ctx.moveTo(100, 10);
        ctx.lineTo(125, 220);
        ctx.lineTo(100, 370);
        ctx.lineTo(345, 290);
        ctx.lineTo(445, 370);
        ctx.lineTo(435, 220);
        ctx.lineTo(445, 10);
        ctx.lineTo(345, 50);
        ctx.lineTo(100, 10);
        ctx.fill();
        ctx.stroke();
        
        for (var g = 0; g < 4; g++) {
            if (g == 0) {
                ctx.style = Bargba(255, 0, 0, 1);

            } else {
                ctx.style = blue;
            }
            ctx.fillrect(x, y, scoreondiagram, 40);
            x = x + 90;

        }
    




    //}
}