function setup(){
    canvas=createCanvas(500,360);
    canvas.position(450,230);
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YV6dx8nNM/model.json',modelLoaded);
}
function modelLoaded(){
    console.log("Model Loaded!!!");
}
function draw(){
    image(video,0,0,500,360);
    classifier.classify(video,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
        document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(4);
    }
}