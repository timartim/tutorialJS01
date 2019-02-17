var canvasElement = document.getElementById('test_id');
if(canvasElement){
	var ctx = canvasElement.getContext('2d');
  
 ctx.beginPath();
   ctx.moveTo(10,10);
    ctx.lineTo(20,40);
 
    ctx.lineTo(10,70);
    ctx.lineTo(60,60);
    ctx.lineTo(110,70);
    ctx.lineTo(100,40);
    ctx.lineTo(110,10);
    ctx.lineTo(60,20);
    ctx.lineTo(10,10);
    ctx.fill();
    
       ctx.moveTo(50,30);
       ctx.lineTo(70,30);
       ctx.lineTo(70,50);
       ctx.lineTo(50,50);
       ctx.lineTo(50,30);
       
       //ctx.moveTo(60,40);
    ctx.fillStyle = "red";
   ctx.fill();
   
   

