canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_height=50;
car1_width=130;

car2_height=50;
car2_width=130;

car1_x=30;
car1_y=30;

car2_x=30;
car2_y=100;

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

window.addEventListener("keydown", my_keydown2);

function my_keydown2(e){

    key_pressed2=e.keyCode;
    console.log(key_pressed2);
    
   
    if(key_pressed2=='87'){
        console.log("car2 going up");
        car2_up();
    }
    
    if(key_pressed2=='83'){
        console.log("car2 going down");
        car2_down();
    }

    if(key_pressed2=='65'){
        console.log("car2 going left");
        car2_left();
    }

    if(key_pressed2=='68'){
        console.log("car2 going right");
        car2_right();
    }
}
function car1_up(){

    if(car1_y >=10){

        car1_y-=10;
        console.log("car1_y when up is pressed"+car1_y);
        uploadbg();
        uploadbg1();
        uploadbg2();
    }
}

function car1_down(){

    if(car1_y <=400){

        car1_y+=10;
        console.log("car1_y when down is pressed"+car1_y);
        uploadbg();
        uploadbg1();
        uploadbg2();
    }
}

function car1_left(){

    if(car1_x >=10){

        car1_x-=10;
        console.log("car1_x when left is pressed"+car1_x);
        uploadbg();
        uploadbg1();
        uploadbg2();
    }
}

function car1_right(){

    if(car1_x <=500){

        car1_x+=10;
        console.log("car1_x when right is pressed"+car1_x);
        uploadbg();
        uploadbg1();
        uploadbg2();
    }
}

function car2_up(){

    if(car2_y >=10){

        car2_y-=10;
        console.log("car2_y when w is pressed"+car2_y);
        uploadbg();
        uploadbg1();
        uploadbg2();
    }
}

function car2_down(){

    if(car2_y <=400){

        car2_y+=10;
        console.log("car2_y when s is pressed"+car2_y);
        uploadbg();
        uploadbg1();
        uploadbg2();
    }
}

function car2_left(){

    if(car2_x >=10){

        car2_x-=10;
        console.log("car2_x when a is pressed"+car2_x);
        uploadbg();
        uploadbg1();
        uploadbg2();
    }
}

function car2_right(){

    if(car2_x <=500){

        car2_x+=10;
        console.log("car2_x when d is pressed"+car2_x);
        uploadbg();
        uploadbg1();
        uploadbg2();
    }
}

