canvas = new fabric.Canvas("myCanvas");
pyr_x = 10;
pyr_y = 10;

blc_w = 30;
blc_h = 30;

pyr_obj = "";
blc_obj = "";

//variables up there⇈//

function player_updt(){

    fabric.Image.fromURL("player.png", function(Img){
        pyr_obj = Img;
        pyr_obj.scaleToWidth(150);
        pyr_obj.scaleToHeight(140);

        pyr_obj.set({
            left : pyr_x,
            top : pyr_y
        });
        canvas.add(pyr_obj);
    });

}

function new_image(gt_imge){
    fabric.Image.fromURL(gt_imge, function(Img){
        blc_obj = Img;
        blc_obj.scaleToWidth(blc_w);
        blc_obj.scaleToHeight(blc_h);

        blc_obj.set({
            left : pyr_x,
            top : pyr_y
        });
        canvas.add(blc_obj);
    });
}

//updating objects up there⇈//
//key event listener↓↓//

window.addEventListener('keydown', my_kda)

function my_kda(e){

    keypressed = e.keyCode;
    console.log(keypressed);

    if(e.shiftKey == true && keypressed == '80'){
        console.log("sft+p");
        blc_h = blc_h +10;
        blc_w = blc_w +10;
        document.getElementById('crnt_w').innerHTML = blc_w;
        document.getElementById('crnt_h').innerHTML = blc_h;
    }
    if(e.shiftKey == true && keypressed == '77'){
        console.log("sft+m");
        blc_h = blc_h -10;
        blc_w = blc_w -10;
        document.getElementById('crnt_w').innerHTML = blc_w;
        document.getElementById('crnt_h').innerHTML = blc_h;
    }


    if(keypressed == '37'){
        left();
    }
    if(keypressed == '38'){
        up();
    }
    if(keypressed == '39'){
        right();
    }
    if(keypressed == '40'){
        down();
    }


    if(keypressed == '87'){
        new_image('wall.jpg');  
    }
    if(keypressed == '76'){
        new_image('light_green.png');  
    }
    if(keypressed == '71'){
        new_image('ground.png');  
    }
    if(keypressed == '68'){
        new_image('dark_green.png');  
    }
    if(keypressed == '89'){
        new_image('yellow_wall.png');  
    }
    if(keypressed == '85'){
        new_image('unique.png');  
    }
    if(keypressed == '82'){
        new_image('roof.jpg');  
    }
    if(keypressed == '67'){
        new_image('cloud.jpg');  
    }
    if(keypressed == '84'){
        new_image('trunk.jpg');  
    }

}

function left(){

    if (pyr_x >= 0){
        pyr_x = pyr_x - blc_w;
        canvas.remove(pyr_obj);
        player_updt();
    }
    
}
function right(){

    if (pyr_x <= 850){
        pyr_x = pyr_x + blc_w;
        canvas.remove(pyr_obj);
        player_updt();
    }
    
}
function up(){

    if(pyr_y >= 0){
        pyr_y = pyr_y - blc_h;
        canvas.remove(pyr_obj);
        player_updt();
    }

}
function down(){

    if(pyr_y <= 460){
        pyr_y = pyr_y + blc_h;
        canvas.remove(pyr_obj);
        player_updt();
    }

}



