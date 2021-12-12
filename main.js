nose_x = 0;
nose_y = 0;

difference = 0;
right_wrist_x = 0;
left_wrist_x = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#969A97');
    fill("#F90093");
    stroke("#F90093");
    document.getElementById("square_side").innerHTML = "Width and height of square will be = "+ difference +"px";
    square(nose_x, nose_y, difference);
}
function modelLoaded(){
    console.log("poseNet is initialized!");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose_x = "+nose_x+" nose_y = "+nose_y);

        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
        console.log("left_wrist_x = "+left_wrist_x+" right_wrist_x = "+right_wrist_x+" difference = "+difference);
    }
}