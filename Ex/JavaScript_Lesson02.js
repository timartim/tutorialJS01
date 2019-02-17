// 

var canvas = document.getElementById("tutorial");
var ctx = canvas.getContext('2d');

var W = canvas.width;
var H = canvas.height;
var p = 10;
var N = 6;
var pc = (W - 2 * p) / (3 * N - 1);
var wc = 2 * pc;
var f = 50;
var HF = 200;


for (var i = 0; i < N; i = i + 1) {
    ctx.fillRect(p + i * (wc + pc), H - f - HF / Math.pow(2, i), wc, HF / Math.pow(2, i));
}





