var canvas;
let numbers = [];
let count = 1;
let sequence = [];
let index = 0;
let arcs = [];
let biggest = 0;
let osc;

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);

    numbers[index] = true;
    sequence.push(index);

    for(let i = 0; i < 11; i++){
        step();
    }

    osc = new p5.Oscillator();
    osc.setType('sine');
    osc.freq(240);
    osc.amp(2);
    osc.start();
}

function step(){
    let next = index-count;
    if(next < 0 || numbers[next]){
        next = index+count;
    }

    let a = new Arc(index,next,count%2);
    arcs.push(a);

    if(index > biggest){
        biggest = index;
    }
    
    numbers[next] = true;
    sequence.push(next);
    index = next;
    count++;
}

function draw(){
    step();
    translate(0,height/2)
    scale(width/biggest);
    background(0);
  
    for(let a of arcs){
       a.show();
    }
}