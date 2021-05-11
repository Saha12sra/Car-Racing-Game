canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_height=60;
car1_width=100;

car2_height=60;
car2_width=100;

car1_x=100;
car1_y=100;

car2_x=100;
car2_y=200;

background_img="racing.jpeg";
car1_img="blue_car.png";
car2_img="red_car.png";

function add(){
bi1=new Image();
bi1.onload=uploadbg;
bi1.src=background_img;

c1i=new Image();
c1i.onload=uploadbg1;
c1i.src=car1_img;

c2i=new Image();
c2i.onload=uploadbg2;
c2i.src=car2_img;
}

function uploadbg(){
    ctx.drawImage(bi1,0,0,canvas.width, canvas.height);
    
}

function uploadbg1(){
    ctx.drawImage(c1i,car1_x,car1_y,car1_width,car1_height);
}

function uploadbg2(){
    ctx.drawImage(c2i,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){

    key_pressed=e.keyCode;
    console.log(key_pressed);
    
   
    if(key_pressed=='38'){
        console.log("car1 going up");
        car1_up();
    }
    
    if(key_pressed=='40'){
        console.log("car1 going down");
        car1_down();
    }

    if(key_pressed=='37'){
        console.log("car1 going left");
        car1_left();
    }

    if(key_pressed=='39'){
        console.log("car1 going right");
        car1_right();
    }
}

window.addEventListener("keydown2", my_keydown2);

function my_keydown2(e){

    key_pressed=e.keyCode;
    console.log(key_pressed);
    
   
    if(key_pressed=='w'){
        console.log("car2 going up");
        car2_up();
    }
    
    if(key_pressed=='s'){
        console.log("car2 going down");
        car2_down();
    }

    if(key_pressed=='a'){
        console.log("car2 going left");
        car2_left();
    }

    if(key_pressed=='d'){
        console.log("car2 going right");
        car2_right();
    }
}

