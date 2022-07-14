difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
  video = createCapture(VIDEO);
  video.size(560, 700);
  video.position(250, 100)

  canvas = createCanvas(560, 480);
  canvas.position(1000, 200);

  poseNet = ml5.poseNet(video, modelloaded);
  poseNet.on('pose', gotPoses);
}

function draw() {
  image(video, 0, 0, 600, 500);
  fill("red");
  stroke("red");
  background("orange");
  textSize(difference);
  text("I am Santasri Mukherjee" ,50 ,250);
}

function modelloaded() {
  console.log("PoseNet has been Initialized !");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    console.log("leftWristX = " + leftWristX );

    rightWristX = results[0].pose.rightWrist.x;
    console.log("rightWristX = " + rightWristX );

    difference = Math.floor(leftWristX - rightWristX);

  }
}

