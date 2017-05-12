var cities = [];
var recordDist;
var bestEver;
var total = 8;
var count = 0;
var perm;
var order = [];

function setup() {
    createCanvas(400, 400);

    for(var i = 0; i < total; i++) {
        cities[i] = createVector(random(width), random(height/2));
        order[i] = i;
    }

    recordDist = calcDistance(cities, order);
    bestEver = order.slice();
    perm = fact(total);
    console.log(perm);

}

function draw() {
    background(0);

    noFill();
    stroke(0,0,255);    
    for(var i = 0; i < cities.length; i++) {
        ellipse(cities[i].x, cities[i].y, 8, 8);
    }

    // var i = floor(random(cities.length));
    // var j = floor(random(cities.length));
    // swap(cities, i, j);

    var d = calcDistance(cities, order);
    if (d < recordDist) {
        recordDist = d;
        console.log(recordDist);
        bestEver = order.slice();
    }

    noFill();
    stroke(255,0,255);
    strokeWeight(2);
    beginShape();
    for (var i = 0; i < order.length; i++) {
        var n = bestEver[i];
        vertex(cities[n].x, cities[n].y);
    }
    endShape();

    nextOrder();

    stroke(255);
    translate(0, height/2);//, y, [z])
    noFill();    
    for(var i = 0; i < cities.length; i++) {
        ellipse(cities[i].x, cities[i].y, 8, 8);
    }

    noFill();
    stroke(255);
    strokeWeight(1);
    beginShape();
    for(var i = 0; i < cities.length; i++) {
        var n = order[i];
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

function nextOrder() {
    var largest = -1;
  for (var i = 0; i < order.length-1; i++) {
    if(order[i] < order[i+1]) {
      largest = i;
    }
  }

  if(largest == -1) {
    console.log("Fin!");
    noLoop();
  }

  var largestJ = -1;

  for(var j = 0; j < order.length; j++) {
    if(order[j] > order[largest]) {
      largestJ = j;
    }
  }

  swap(order, largest, largestJ);

  var endArray = order.splice(largest+1);
  endArray.reverse();
  order = order.concat(endArray);

  var s = '';
  for(var j = 0; j < order.length; j++) {
    s += order[j];
  }
  document.getElementById("123").innerHTML = s;

  count++;

  var percent = 100 * (count/perm);
  document.getElementById("12").innerHTML = percent + '%';
}

function fact(n) {
    if (n == 1) {
        return 1;
    }
    return n * fact(n-1);
}