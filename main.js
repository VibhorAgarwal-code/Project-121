x = 0;
y = 0;
shape = document.getElementById("shape").value;
screen_width = "";
screen_height = "";
shape = "";
speak_data = "";
to_number = "";
draw_squa = "";
draw_rect = "";
draw_circle = "";
var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();


function start() {
  document.getElementById("status").innerHTML = "System is listening please speak";
  recognition.start();
}
recognition.onresult = function (event) {

  console.log(event);
  content = event.results[0][0].transcript;
  to_number = Number(content);

  document.getElementById("status").innerHTML = "The speech has been recognized: " + content;

  if (Number.isInteger(to_number) && (value = "circle")) {
    document.getElementById("status").innerHTML = "Started drawing circle";
    draw_circ = "set";
  } if (Number.isInteger(to_number) && (value = "square")) {
    document.getElementById("status").innerHTML = "Started dawing square";
    draw_squa = "set";
  } if (Number.isInteger(to_number) && (value = "rectangle")) {
    document.getElementById("status").innerHTML = "Started dawing rectangle";
    draw_rect = "set";
  }
}
function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  createCanvas(screen_width, screen_height - 150);
}

function draw(square) {
  if (draw_squa == "set") {
    document.getElementById("status").innerHTML = to_number + " square  drawn";
    width = 50;
    height = 50;
    for (i = 0; i < to_number; i++) {
      x = Math.floor(Math.random() * 900);
      y = Math.floor(Math.random() * 600);
      rect(x, y, width, height);
    }
    draw_squa = "";
  }
}
function draw(rectangle){
  if (draw_rect == "set") {
    document.getElementById("status").innerHTML = to_number + " rectangles  drawn";
    width = 90;
    height = 50;
    for (i = 0; i < to_number; i++) {
      x = Math.floor(Math.random() * 900);
      y = Math.floor(Math.random() * 600);
      rect(x, y, width, height);
    }
    draw_rect = "";
  }
}
draw_circ.draw(circle)
function draw(circle){
  if (draw_circ == "set") {
    draw_circ.draw(circle)
    document.getElementById("status").innerHTML = to_number + " Circles  drawn";
    radius = 20;
    for (i = 0; i < to_number; i++) {
      x = Math.floor(Math.random() * 900);
      y = Math.floor(Math.random() * 600);
      circle(x, y, radius);
    }
    draw_circ = "";
  }
}

function speak() {
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}
