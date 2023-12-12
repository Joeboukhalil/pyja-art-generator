// Pyja-like code for creating a colorful pattern
repeat(10, function() {
  var color = randomColor();
  drawRectangle(random(500), random(500), random(100), random(100), color);
});

// Your custom functions for image generation
function repeat(times, callback) {
  for (var i = 0; i < times; i++) {
    callback();
  }
}

function random(max) {
  return Math.random() * max;
}

function randomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function drawRectangle(x, y, width, height, color) {
  // Your logic to draw a rectangle or any other image generation task
  console.log('Drawing rectangle at', x, y, 'with dimensions', width, height, 'and color', color);
}
