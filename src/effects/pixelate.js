// Pixelate effect
var exec = function(main){
	var i = 0;
	for(var y = 0; y < main.img.i.height; y += main.strokeResolution){
		for(var x = 0; x < main.img.i.width; x += main.strokeResolution){
			// Draw strokes
			auxAvg = (main.avg[i][0]+main.avg[i][1]+main.avg[i][2])/3;
			main.canvas.ctx.fillStyle = 'rgba('+main.avg[i][0]+','+main.avg[i][1]+','+main.avg[i][2]+',1)';
			main.canvas.ctx.fillRect(x,Math.round(main.img.y+y),main.strokeResolution, main.strokeResolution);
			i++;
		}
	}
}