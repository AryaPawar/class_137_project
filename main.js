function setup(){
    canvas = createCanvas(400, 350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,350);
    video.hide();
}
function draw(){
    image(video, 0, 0, 480, 380);
    if(status != ""){
        objectDetector.detect(video, gotResult);
        for (i = 0; i<objects.length; i++) {
        document.getElementById("status").innerHTML = "Status: Object Detected";
        document.getElementById("Number_of_objects").innerHTML = "number of objects detected are:"+objects.length;
        fill("#000000");
        percent=floor (objects[i].confidence * 100);
        text(objects[i].label+ " " + percent + "%",objects[i].x + 15, objects[i].y + 15)
        noFill();
        stroke("#000000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);  
  }
 }
}
function start(){
    objectDetecter = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status: Detecting Objects";
}
function modelLoaded(){
    console.log("ModelLoaded!");
    status=true;
}
function gotResult(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objects=results;
    }
