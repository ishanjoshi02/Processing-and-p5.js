var blob;
var count = 25;


var blobs = [];
function setup() {
    createCanvas(400, 400);
    blob = new Blob(0, 0, 64);
    for(var i = 0; i < count; i++) {
        blobs.push(new Blob(random(width/2), random(height/2), 16));
    }
}
function draw() {
    background(0);
    scale(64/blob.r);
    translate(width/2, height/2);

    for(var i = blobs.length-1; i >= 0; i--) {
        //blobs[i].show();
        if (blob.eats(blobs[i])) {
            blobs.splice(i, 1);
            //blobs.push(new Blob(random(width/2), random(height/2), 16));
        }
    }

    blob.show();
    blob.update();
    for(var i = 0; i < blobs.length; i++) {
        blobs[i].show();
    }
}