let video;
let detector;
let detections;

function preload() {
  detector = ml5.objectDetector('cocossd');
  detections = [];
}

function gotDetections(error, results) {
  if (error) {
    console.error(error);
  } else {
    // console.log(results);
    detections = results;
    detector.detect(video, gotDetections);
  }
}

function setup() {
  createCanvas(640, 360);
  video = createCapture(VIDEO);
  video.size(640, 360);
  detector.detect(video, gotDetections);
}

function draw() {
  image(video, 0, 0);

  for (object of detections) {
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
