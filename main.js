canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")

background_img="download.jpg";

carblue_width=100;
carblue_height=90;
carblue_img="Bluecar.png";
carblue_x=10;
carblue_y=10;

cargreen_width=100;
cargreen_height=90;
cargreen_img="Greencar.png";
cargreen_x=10;
cargreen_y=10;


function add(){
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;


    carblue_imgTag = new Image(); 
    carblue_imgTag.onload = uploadrover;
    carblue_imgTag.src = carblue_img;

    cargreen_imgTag = new Image(); 
    cargreen_imgTag.onload = uploadrover;
    cargreen_imgTag.src = cargreen_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(carblue_imgTag, carblue_x, carblue_y, carblue.width, carblue.height);

    ctx.drawImage(cargreen_imgTag, cargreen_x, cargreen_y, rover.width, rover.height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;

    console.log(keypressed);
    if(keypressed=="37"){
        car1_left();
        console.log("left arrow key");
    }
    if(keypressed=="38"){
        car1_up();
        console.log("up arrow");
    }
    if(keypressed=="39"){
        car1_right();
        console.log("right arrow key");
    }
    if(keypressed=="40"){
        car1_down();
        console.log("down arrow key");
    }
    if(keypressed=="87"){
        car2_w();
        console.log("w key");
    }
    if(keypressed=="65"){
        car2_a();
        console.log("a key");
    }
    if(keypressed=="83"){
        car2_s();
        console.log("s key");
    }
    if(keypressed=="68"){
        car2_d();
        console.log("d key");
    }
}