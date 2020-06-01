class Arc{

    constructor(start,end,dir){
        this.start = start;
        this.end = end;
        this.dir = dir;
        this.hu = 0;
        this.hu2 = 255;
    }

    show(){

        let diameter = abs(this.end-this.start);
        let x = (this.end+this.start)/2;
        stroke(this.hu,this.hu2,0);
        noFill();
        strokeWeight(0.5);
        if(this.dir === 0){
          arc(x,0,diameter,diameter,PI,0);
        }else{
          arc(x,0,diameter,diameter,0,PI); 
        }

        this.hu += 1;
        if(this.hu > 255){
            this.hu = 0;
        }

        this.hu2 -= 1;
        if(this.hu2 < 0){
            this.hu2 = 255;
        }
    }
}