var points = [];
let count = 0;
let saved = false;
var mult;

let r;
let g;
let b;

let r1;
let g1;
let b1;

let r2;
let g2;
let b2;

let alpha;

let image;

function preload() {
  image = loadImage("assets/image.jpg");
}

function setup() {
  var canvas = createCanvas(image.width, image.height);
  canvas.parent('canvasHTML');
  background(25);
  angleMode(DEGREES);
  noiseDetail(1);

  r1 = random(255);
  g1 = random(255);
  b1 = random(255);

  r2 = random(255);
  g2 = random(255);
  b2 = random(255);

  mult = random(0.004, 0.001);

  var density = 80;
  var space = width / density;

  for (var i = 0; i < width; i += space) {
    for (var j = 0; j < height; j += space) {
      var p = createVector(i + random(-10, 10), j + random(-10, 10));
      points.push(p);
    }
  }

  initial_points_length = points.length;
}

function draw() {
  noStroke();
  if(count < 100){
    linhazinha();
    count ++;
  }
}

function linhazinha() {
  for (var x = 0; x < points.length; x++) {
    r = map(Math.abs(points[x].x - width / 2), 0, 720, 255, 0);
    g = 100; //map(points[x].x, 0, width, 0, 255)
    b = map(sin(angle), -1, 1, 0, 255);
    alpha = map(
      dist(width / 2, height / 2, points[x].x, points[x].y),
      229,
      0,
      255,
      0
    );

    let c = image.get(points[x].x, points[x].y);
    let cwhite = (red(c) + green(c) + blue(c)) / 3;
    let ct = image.get(points[x].x, points[x].y - 1);
    let ctwhite = (red(ct) + green(ct) + blue(ct)) / 3;
    let cr = image.get(points[x].x + 1, points[x].y);
    let crwhite = (red(cr) + green(cr) + blue(cr)) / 3;
    let cb = image.get(points[x].x, points[x].y + 1);
    let cbwhite = (red(cb) + green(cb) + blue(cb)) / 3;
    let cl = image.get(points[x].x - 1, points[x].y);
    let clwhite = (red(cl) + green(cl) + blue(cl)) / 3;

    let edge = Math.max(
      cwhite - ctwhite,
      cwhite - crwhite,
      cwhite - cbwhite,
      cwhite - clwhite
    );

    var angle = map(edge, 0, 255, 0, 720);
    points[x].add(createVector(cos(angle), sin(angle)));

    if (x == 10) {
      fill(23);
      ellipse(points[x - 10].x, points[x - 10].y, image.width / 1000);
    }
    //if(dist(width/2, height/2, points[x].x, points[x].y) < 350){
    fill((cwhite + 3*r) / 4, (cwhite + 3*g) / 4, (cwhite + 3*b) / 4, alpha);
    ellipse(points[x].x, points[x].y, image.width / 1000);
    //}
  }
}

function spawnBalls(cordX, cordY) {
  cordX += random(-1, 1);
  cordY += random(-1, 1);
  cordX = constrain(cordX, 0, width);
  cordY = constrain(cordY, 0, height);

  stroke(r, g, b);
  if (dist(width / 2, height / 2, points[x].x, points[x].y))
    point(cordX, cordY);
}
