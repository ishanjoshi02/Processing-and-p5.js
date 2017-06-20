var points = [];
var database;
var currentPath = [];
var saveButton;
var isDrawing = false;

function setup() {
    canvas = createCanvas(600, 600);
    canvas.mousePressed(startPath);
    canvas.mouseReleased(endPath);
    canvas.parent('canvasContainer');
    var config = {
        apiKey: "AIzaSyDEidCgbOPBp6BV3TsUvIzBp7rNLflGJR4",
        authDomain: "canvas-saver.firebaseapp.com",
        databaseURL: "https://canvas-saver.firebaseio.com",
        projectId: "canvas-saver",
        storageBucket: "canvas-saver.appspot.com",
        messagingSenderId: "659118827213"
    };
    firebase.initializeApp(config);
    saveButton = select('#saveButton');
    saveButton.mousePressed(saveDrawing);
    database = firebase.database()
    var ref = database.ref('drawings')
    ref.on('value', gotData, errData)
}

function startPath() {
    currentPath = [];
    points.push(currentPath);
    isDrawing = true;
}

function endPath() {
    isDrawing = false;
}

function draw() {
    background(51);
    if (mouseIsPressed && isDrawing) {
        console.log("Mouse Pressed")
        var point = {
            x: mouseX,
            y: mouseY
        }
        currentPath.push(point);
    }
    stroke(255);
    strokeWeight(5);
    noFill();
    for (var i = 0; i < points.length; i++) {
        var path = points[i];
        beginShape();
        for (var j = 0; j < path.length; j++) {
            vertex(path[j].x, path[j].y);
        }
        endShape();
    }
    beginShape();
    stroke(255);
    strokeWeight(5);
    noFill();
    currentPath.forEach(function(element) {
        vertex(element.x, element.y)
    }, this);
    endShape();
}

function saveDrawing() {
    var ref = database.ref('drawings');
    var data = {
        name: "Ishan's Drawings",
        points: points
    }
    ref.push(data)
    console.log("Pushed " + data.name)
}

function gotData(data) {
    var drawings = data.val()
    var keys = Object.keys(drawings)
    for (var i = 0; i < keys.length; i++) {
        var li = createElement('li', keys[i]);
        li.parent('drawingList');
    }
}

function errData(err) {
    console.log('Error' + err)
}