var rows = 25;
var cols = 25;
var grid = new Array(cols);

var openSet = [];
var closedSet = [];

var w, h;

var start, end;

var path = [];

function Spot(i, j) {
    this.f = 0;
    this.g = 0;
    this.h = 0;

    this.i = i;
    this.j = j;

    this.neighbors = [];
    this.previous = undefined;

    this.wall = false;

    if(random(1) < 0.1) {
        this.wall = true;
    }

    this.show = function(col) {
        fill(col);
        if(this.wall) {
            fill(color(0))
        }
        noStroke();
        ellipse(this.i * w + w/2, this.j * h + h/2, w/2, h/2);
    }

    this.addNeighbors = function(grid) {
        var i = this.i;
        var j = this.j;

        if (i < cols - 1) {
            this.neighbors.push(grid[i+1][j]);
        } if (i > 0) {
            this.neighbors.push(grid[i-1][j]);
        } if (j < rows - 1) {
            this.neighbors.push(grid[i][j+1]);
        } if (j > 0) {
            this.neighbors.push(grid[i][j-1]);
        } if (i > 0 && j > 0) {
            this.neighbors.push(grid[i-1][j-1]);
        } if (i < cols - 1 && j < rows - 1) {
            this.neighbors.push(grid[i+1][j+1]);
        } if (i > 0 && j < rows - 1) {
            this.neighbors.push(grid[i-1][j+1])
        } if (i < cols - 1 && j > 0) {
            this.neighbors.push(grid[i+1][j-1]);
        }
        
    }

}

function removeFromArray(arr, elt) {
    for(var i = arr.length - 1; i >= 0; i--) {
        if(arr[i] == elt) {
            arr.splice(i,1);
        }
    }
}

function heuristic(a, b) {
    //return abs(a.i - b.i) + abs(a.j - b.j);
    return 
}

function setup() {
    createCanvas(800, 640);

    for(var i = 0; i < cols; i++) {
        grid[i] = new Array(rows);
    }

    for(var i = 0; i < cols; i++) {
        for(var j = 0; j < rows; j++) {
            grid[i][j] = new Spot(i, j);
        }
    }

    for(var i = 0; i < cols; i++) {
        for(var j = 0; j < rows; j++) {
            grid[i][j].addNeighbors(grid);
        }
    }

    start = grid[0][0];
    end = grid[cols-1][rows-1];

    openSet.push(start);

    w = width / cols;
    h = height / rows;

}

function draw() {

    if(openSet.length > 0) {
        var lIndex = 0;
        for(var i = 0; i < openSet.length; i++) {
            if (openSet[i].f < openSet[lIndex].f) {
                lIndex = i;
            }
        }

        var current = openSet[lIndex];

        if (current === end) {
            //Draw Path here
            var temp = current;
            path.push(temp);
            while(temp.previous) {
                path.push(temp.previous);
                temp = temp.previous;
            }
        } 

        removeFromArray(openSet, current);
        closedSet.push(current);

        var neighbors = current.neighbors;

        for(var i = 0; i < neighbors.length; i++) {
            var neighbor = neighbors[i];
            var newPath = false;
            if (!closedSet.includes(neighbor) && !neighbor.wall) {
                var temp_g = current.g + 1;
                
                if(openSet.includes(neighbor)) {
                    if (temp_g < neighbor.g) {
                        neighbor.g = temp_g;
                        newPath = true;
                    }
                }
                else {
                    newPath = true;
                    neighbor.g = temp_g;
                    openSet.push(neighbor);
                }

                if(newPath) {
                neighbor.previous = current;
                neighbor.h = heuristic(neighbor, end);
                neighbor.f = neighbor.g + neighbor.h;
                }

            }
        }
    } 
    else {
        // console.log("No Solution!");
        noLoop();
        return;
    }

    background(251,255,0);
    for(var i = 0; i < cols; i++) {
        for(var j = 0; j < rows; j++) {
            grid[i][j].show(color(255));
        }
    }
    noFill();
    stroke(255,100,10);
    strokeWeight(2);
    beginShape();
    for (var i = 0; i < path.length; i++) {
        vertex(path[i].i * w + w/2, path[i].j * h + h/2)
    }
    endShape();

}
