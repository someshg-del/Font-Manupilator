function setup()
{
  video=createCapture(VIDEO);
  video.size(550,500);

  canvas=createCanvas(500,400);
  canvas.position(560,100);

 posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses)

}


function modelLoaded()
{
    console.log("Model is initialized");

}

function gotPoses(results)
{
    if (results.length>0) 
    {
      console.log(results);  
    }
}



function draw()
{
    background('#969A97');
}