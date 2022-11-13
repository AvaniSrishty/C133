status = "";
images = [];
function preload(){
    img = loadImage("plants_project.jpeg");
}

function setup(){
    canvas = createCanvas(600, 450);
    canvas.position(330, 230);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw(){
    image(img, 0, 0, 600, 500);

    if(status != ""){
        console.log("status");

       for(i = 0; i<images.length; i++){
           document.getElementById("status").innerHTML = "object dectected"
           fill("blue");
           percentage = ceil(images[i].confidence*100) + " %"
           text(images[i].label + " " + percentage, images[i].x , images[i].y )
       
           noFill();
           stroke("blue");
           rect( images[i].x ,images[i].y ,images[i].width, images[i].height);
           
       }
       }
}

function modelLoaded(){
    console.log("model is ready");
    status = true;
    object_Detector.detect(img,gotResults);
}


function gotResults(error, result){
    if(error){
       console.log(error);
    }

    else{
        console.log(result);
        images = result;
    }
}
