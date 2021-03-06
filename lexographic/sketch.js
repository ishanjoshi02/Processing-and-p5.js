var vals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
  console.log(vals);

  var largest = -1;
  for (var i = 0; i < vals.length-1; i++) {
    if(vals[i] < vals[i+1]) {
      largest = i;
    }
  }

  if(largest == -1) {
    console.log("Fin!");
    noLoop();
  }

  var largestJ = -1;

  for(var j = 0; j < vals.length; j++) {
    if(vals[j] > vals[largest]) {
      largestJ = j;
    }
  }

  swap(vals, largest, largestJ);

  var endArray = vals.splice(largest+1);
  endArray.reverse();
  vals = vals.concat(endArray);

  textSize(64);
  var s = '';
  for(var j = 0; j < vals.length; j++) {
    s += vals[j];
  }
  fill(255);
  text(s, 175, height/2);
}

function swap(a, i, j) {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}
