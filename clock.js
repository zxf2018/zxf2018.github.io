var dom = document.getElementById('clock');
var ctx = dom.getContext('2d'); 
var width = ctx.canvas.width; 
var height = ctx.canvas.height; 
var r  = width/2; 
var rem  = width / 200 ;

function drawBackgroud()
{
   ctx.save();

   ctx.translate(r,r);

   ctx.beginPath(); 
   ctx.lineWidth= 10*rem;

   ctx.arc(0,0,r-ctx.lineWidth/2,0,2*Math.PI,false);

   ctx.stroke();
   var hourNumbers  = [3,4,5,6,7,8,9,10,11,12,1,2];
   ctx.font= 16*rem+"px Arial";
   ctx.textAlign="center";
   ctx.textBaseline="middle";
   hourNumbers.forEach(function (numberd,i)
{
	 var rad  = 2 * Math.PI  / 12 * i;  
	 var x = Math.cos(rad) * (r - 30 * rem); 
	 var y = Math.sin(rad) * (r - 30 * rem); 
     ctx.fillText(numberd,x,y);
});
   for(var i = 0 ;i<60 ;i++)
   {
   	 var rad  = 2* Math.PI / 60 *i; 
  
   	 var x = Math.cos(rad) * (r - 18 * rem); 
	 var y = Math.sin(rad) * (r - 18 * rem);  
 
	 ctx.beginPath(); 
	 if(i % 5 == 0)
	 {
	 	 ctx.fillStyle = "#000" ;
	  
	 }else
	 {
	 	 ctx.fillStyle  =  "#7CD500" ;
	 	
	 }
	   ctx.arc(x,y,2* rem,0,2*Math.PI,false);

	   ctx.fill();
   }
}
 function drawHour(hour,minute)
 {
 	 ctx.save();
 	 ctx.beginPath(); 
 	 
 	 var hrad   =  2* Math.PI / 12 *hour; 
     var mrad   =  2* Math.PI / 12 / 60 * minute;
 	 ctx.rotate(hrad+mrad);
 	 ctx.lineWidth= 6 * rem;
 	 ctx.lineCap="round";
 	 ctx.moveTo(0,10* rem); 
 	 ctx.lineTo(0,-r / 2  );
 	 ctx.stroke();
 	 ctx.restore();
 }
 function drawMinute(Minute)
 {
 	 ctx.save();
 	 ctx.beginPath(); 
 	 var rad   =  2* Math.PI / 60 * Minute; 
 	 ctx.rotate(rad);
 	 ctx.lineWidth= 3 * rem;
 	 ctx.lineCap="round";
 	 ctx.moveTo(0,15); 
 	 ctx.lineTo(0,-r / 2 );
 	 ctx.stroke();
 	 ctx.restore();
 }
 
 
  function drawSecound(secound)
 {
 	 ctx.save();
 	 ctx.fillStyle= "#F54E17";
 	 ctx.beginPath(); 
 	 var rad   =  2* Math.PI / 60 *secound; 
 	 ctx.rotate(rad);
 	  
 	  
 	 ctx.moveTo(-2 * rem,20); 
 	 ctx.lineTo(2* rem,20);
 	 ctx.lineTo(1,-r +18* rem);
 	 ctx.lineTo(-1,-r +18* rem)
 	 
 	 ctx.fill();
 	 ctx.restore();
 	  
 }
	
	function drabg()
	{
		ctx.beginPath(); 
		ctx.fillStyle= "#BDE163";
		ctx.globalAlpha=0.6;
		ctx.arc(0,0,r,0,2* Math.PI,false);
		ctx.fill();
	}
	
 
function draw()
{
	ctx.clearRect(0,0,width,height);
var now = new Date();
	var hour  = now.getHours(); 
	var minute  = now.getMinutes(); 
	var second  = now.getSeconds();
drawBackgroud();
drawHour(hour,minute);
drawMinute(minute);
drawSecound(second);
drabg();
ctx.restore();
} 
draw();
setInterval(draw,1000);
