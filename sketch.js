var points = []
var mult

let r
let g
let b

let r1
let g1
let b1

let r2
let g2
let b2

let alpha

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(23)
  angleMode(DEGREES)
  noiseDetail(1)

  r1 = random(255)
  g1 = random(255)
  b1 = random(255)

  r2 = random(255)
  g2 = random(255)
  b2 = random(255)

  mult = random(0.004, 0.001)

  var density = 50;
  var space = width / density;

  for (var i = 0; i<width; i+= space){
    for(var j = 0; j < height; j+= space){
      var p = createVector(i + random(-10, 10), j + random(-10, 10))
      points.push(p)
    }
  }
}

function draw() {
  noStroke()
  linhazinha()
}

function linhazinha(){
  for (var x = 0; x < points.length; x++){

    r = map(Math.abs(points[x].x-(width/2)), 0, 720, 255, 0)
    g = 100//map(points[x].x, 0, width, 0, 255)
    b = map(sin(angle), -1, 1, 0, 255)
    //alpha = map(dist(width/2, height/2, points[x].x, points[x].y), 229, 0, 255, 0)

    

    var angle = map(noise(points[x].x * mult, points[x].y * mult), 0, 1, 0, 720)
    points[x].add(createVector(cos(angle), sin(angle)))
    
    if(x == 10){
      fill(23)
      ellipse(points[x-10].x, points[x-10].y, 1)
    }
    //if(dist(width/2, height/2, points[x].x, points[x].y) < 350){
      fill(r, g, b, alpha)
      ellipse(points[x].x, points[x].y, 1)
    //}
  }
}

function spawnBalls(cordX, cordY){

    cordX += random(-1, 1);
    cordY += random(-1, 1);
    cordX = constrain(cordX, 0, width);
    cordY = constrain(cordY, 0, height);

    stroke(r, g, b)
    if(dist(width/2, height/2, points[x].x, points[x].y))
    point(cordX, cordY)
  
}