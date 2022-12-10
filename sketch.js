function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 128);
  noStroke();
  target = {
    x: random(width),
    y: random(height),
    size: 56.25, // 1.5 times bigger than before
    color: color(255, 0, 0),
    time: millis()
  };
  score = 0;
  hits = 0;
  misses = 0;
}

function draw() {
  background(0, 0, 128);
  fill(target.color);
  ellipse(target.x, target.y, target.size);
  fill(255);
  textSize(24);
  textAlign(LEFT);
  text("Score: " + score, 10, 30);
  let total = hits + misses;
  let accuracy = 0;
  if (total > 0) {
    accuracy = round((hits / total) * 100);
  }
  text("Accuracy: " + accuracy + "%", 10, 60);
  if (millis() - target.time > 750) {
    target = {
      x: random(width),
      y: random(height),
      size: 56.25, // 1.5 times bigger than before
      color: color(255, 0, 0),
      time: millis()
    };
    misses++;
  }
}

function mousePressed() {
  if (
    mouseX >= target.x - target.size / 2 &&
    mouseX <= target.x + target.size / 2 &&
    mouseY >= target.y - target.size / 2 &&
    mouseY <= target.y + target.size / 2
  ) {
    score++;
    hits++;
    target = {
      x: random(width),
      y: random(height),
      size: 56.25, // 1.5 times bigger than before
      color: color(255, 0, 0),
      time: millis()
    };
  } else {
    misses++;
  }
}
