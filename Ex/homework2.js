//https://jsfiddle.net/zoxLnwps/3/
https://jsfiddle.net/24b8j3yL/2/
https://jsfiddle.net/avyjd8m5/
var drawColumns = function (columnsNumber, indentSize, ctx) {
    var height = ctx.canvas.height;
    var width = ctx.canvas.width;
    var distanceBetweenColumns = (width - 2 * indentSize) / (3 * columnsNumber - 1);
    var columsWidth = 2 * distanceBetweenColumns;
    var indentSizeFromBottom = indentSize;
    var firstColumHeight = height - 2 * indentSizeFromBottom;


    for (var i = 0; i < columnsNumber; i = i + 1) {
        ctx.fillRect(indentSize + i * (columsWidth + distanceBetweenColumns), height - indentSize - firstColumHeight / Math.pow(2, i), columsWidth, firstColumHeight / Math.pow(2, i));

    }
}
var canvas = document.getElementById("tutorial");
var ctx = canvas.getContext('2d');
drawColumns(6, 10, ctx);
