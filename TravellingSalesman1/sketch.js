var cities = [];
var recordDist = Infinity;
var bestEver;
var total = 8;
var count = 0;
var perm;

var population = [];
var fitness = [];

function setup() {
    createCanvas(400, 400);

    var order = [];

    for(var i = 0; i < total; i++) {
        cities[i] = createVector(random(width), random(height/2));
        order[i] = i;
    }

    for(var i = 0; i < 300; i++) {
        population[i] = shuffle(order);
    }

}

function draw() {
    background(0);

    calcFitness();
    normalizeFitness();
    nextGeneration();

    noFill();
    stroke(0,0,255);    
    for(var i = 0; i < cities.length; i++) {
        ellipse(cities[i].x, cities[i].y, 8, 8);
    }
    noFill();
    stroke(255,0,255);
    strokeWeight(2);
    beginShape();
    for (var i = 0; i < bestEver.length; i++) {
        var n = bestEver[i];
        vertex(cities[n].x, cities[n].y);
    }
    endShape();

    noFill();
    stroke(0,0,255);    
    for(var i = 0; i < cities.length; i++) {
        ellipse(cities[i].x, cities[i].y, 8, 8);
    }
    
    noFill();
    stroke(255,0,255);
    strokeWeight(2);
    beginShape();
    for (var n = 0; n < cities.length; n++) {
        vertex(cities[n].x, cities[n].y);
    }
    endShape();

}

function swap(a, i, j) {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

function calcDistance(points, order) {
    var sum = 0;
    for(var i = 0; i < order.length-1; i++) {
        var cityA = points[order[i]];
        var cityB = points[order[i+1]];
        var d = dist(cityA.x, cityA.y, cityB.x, cityB.y);
        sum += d;
    }
    return sum;
}