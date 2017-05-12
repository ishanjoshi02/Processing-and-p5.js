var population;
var lifespan = 200;
var count = 0;
//var lifeP;
var target;

function setup() {
    createCanvas(400, 400);
    population = new Population();
    target = createVector(width/2, 50);

    //lifeP = createP();
}

function draw() {
    background(51);

    //lifeP.html(count);
    count ++;
    console.log(count);

    if (count === lifespan) {
        count  = 0;
        population.evaluate();
        population.selection();
    }

    ellipse(target.x, target.y, 16, 16);
    population.run();
}

function DNA(genes) {
    this.genes;
    if(genes) {
        this.genes = genes;
    }
    else {
        this.genes = [];
    }
    for(var i = 0; i < lifespan; i++) {
        this.genes[i] = p5.Vector.random2D();
        this.genes[i].setMag(0.1);
    }

    this.crossever = function(partner) {
        var newgenes = [];
        var mid = floor(random(this.genes.length));
        for(var i = 0; i < this.genes.length; i++) {
            if (i > mid) {
                newgenes[i] = this.genes[i];
            }
            else {
                newgenes[i]  = partner[i];
            }
        }
        return new DNA(newgenes);
    }
}

function Population() {
    this.rockets = [];
    this.popsize = 10;
    this.matingpool = [];

    for(var i = 0; i < this.popsize; i++) {
        this.rockets[i] = new Rocket();
    }

    this.run = function () {
        for(var i = 0; i < this.popsize; i++) {
            this.rockets[i].update();
            this.rockets[i].show();
        }
    }

    this.evaluate = function() {

        var maxfit = 0;
        for(var i = 0; i < this.popsize; i++) {
            this.rockets[i].calcFitness();
            if(this.rockets[i].fitness > maxfit) {
                maxfit = this.rockets[i].fitness;
            }
        }

        for(var i = 0; i < this.popsize; i++) {
            this.rockets[i].fitness /= maxfit;
        }

        this.matingpool = [];

        for(var j = 0; j < this.popsize; j++ ) {
            var n = this.rockets[j].fitness * 100;
            for(var k = 0; k < this.popsize; k++) {
                this.matingpool.push(this.rockets[j]);
            }
        }

    }

    this.selection = function() {
        var newRockets = [];
        for(var i = 0; i < this.popsize; i++) {
            var parentA = random(this.matingpool).dna;
            var parentB = random(this.matingpool).dna;
            var child = parentA.crossever(parentB);
            newRockets[i] = new Rocket(child);
        }
        this.rockets = newRockets;
    }

}

function Rocket(dna) {
    this.pos = createVector(width/2, height);
    this.vel = createVector();
    this.acc = createVector();
    if (dna) {
        this.dna = dna;
    } else {
        this.dna = new DNA();
    }
    this.count = 0;
    this.fitness;

    this.applyForce = function (force) {
        this.acc.add(force);
    }

    this.calcFitness = function() {
        var d = dist(this.pos.x, this.pos.y, target.x, target.y);
        this.fitness = map(d, 0, width, width, 0);
    }

    this.update = function () {

        this.applyForce(this.dna.genes[count]);

        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.show = function() {
        push();
        noStroke();
        fill(255);
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);
        rect(0, 0, 25, 5);
        pop();
    }

}