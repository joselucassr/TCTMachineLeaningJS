let img;
let detector;

function preload() {
  img = loadImage('images/dog-and-cat.jpg');
  detector = ml5.objectDetector('cocossd');
}

function gotDetections(error, results) {
  console.log(results);

  for (object of results) {
    stroke(0, 255, 0);
    strokeWeight(4);
    noFill();
    rect(object.x, object.y, object.width, object.height);

    noStroke();
    fill(0, 255, 0);
    textSize(24);
    text(object.label + ': ' + object.confidence, object.x + 10, object.y + 24);
  }
}

function setup() {
  createCanvas(1200, 630);
  image(img, 0, 0, width, height);

  detector.detect(img, gotDetections);
}
