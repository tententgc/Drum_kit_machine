let Canvas; 

function drawScence(){ 
    let ctx = Canvas.getContext("2d"); 
    let spacing = Canvas.height / 20;
    ctx.strokeStyle = "black"; 
    ctx.lineWidth = 1; 
    for(let i=-2 ;i <=2 ;i++){ 
        let y= Canvas.height/2 + i*spacing*2;
        ctx.beginPath(); 
        ctx.moveTo(0,y);
        ctx.lineTo(Canvas.width,y);
        ctx.stroke();
    }
    let location ={ 
        x: Canvas.width/2,
        y: Canvas.height/2
    }

    drawNote(ctx,location); 

}
function main(){ 
    Canvas = document.getElementById("myCanvas");
    fitToScreen(); 
    drawScence();
}


function fitToscreen(){
    Canvas.width = window.innerWidth;
    Canvas.height = window.innerHeight;
} 