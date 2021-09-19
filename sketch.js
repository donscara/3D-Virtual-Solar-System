 var imgsun;
 var imgmoon;
 var imgearth;
 var starplane;
 var starLocs = [];


 function preload(){

     imgsun = loadImage('images/sun.jpg');
     imgmoon = loadImage('images/moon.jpg');
     imgearth = loadImage('images/earth.jpg');
     
 }

function setup() {
   
    createCanvas(1000, 1000, WEBGL);
    starplane = createGraphics(1000, 1000,WEBGL);
    starplane.background(0);
    
    
}

function draw() {
    starplane.background(0);
    noStroke();
    sky();
    background(0);
    
    
    
    push(); //starplane
    sky();
    translate(-500,-500,-500);
    //rotateX(radians(frameCount));
    //rotateY(radians(frameCount));
    //rotateZ(radians(frameCount));
    texture(starplane);
    plane(width*3,height*3);

    pop();
    


    camera(0,0,width, 0, 0, 0, 0, 1, 0);

    //SUN
    
    rotateY(radians(frameCount/2));
    push();
    texture(imgsun);
    sphere(80,50,50);
    pop();

    // EARTH

    push();
    pointLight(255,255, 0, 0, 200);
    ambientMaterial(255,255,0);
    rotateY(radians(frameCount/2));
    translate(200,0,200);
    texture(imgearth);
    sphere(50,50,50);

    //MOON

    push();
    rotateY(radians(frameCount/2));
    rotateZ(radians(frameCount/2));
    directionalLight(125,0,1, 1,0,0);
    pointLight(255, 255, 0, 200, 200, 50);
    normalMaterial();
    translate(50,50,50);
    texture(imgmoon);
    sphere(30,50,50);
    
    pop();
 
    pop();


}



function sky(){
    push();

    while(starLocs.length<200){

        starLocs.push(new createVector(random(starplane.width),random(starplane.heigh)));
    }
    fill(255);
    for (i=0; i<starLocs.length; i++)
    {

        starplane.noStroke();
           
        starplane.rect(starLocs[i].x,starLocs[i].y,1,1);  
        
        
        
        
        
        
    }
    //if (random(1) < 0.3) starLocs.splice(int(random(starLocs.length)), 1);
    pop();    
}

    


