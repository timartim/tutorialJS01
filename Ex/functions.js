
var seconds = function (total) {
    return total % 60;
}

var perimetr = function (side, count) {
    return side * count;
}

var pedestrianFlowRate = function (cycleLength, trafficLength, turningLength) {
    var a = cycleLength / (cycleLength - trafficLength - turningLength )* 100;
    return Math.round(a);
}


seconds(120);
perimetr(12, 23);