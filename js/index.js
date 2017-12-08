
$().ready(function() {
	bowlGame();
});	

function randNumber(){
	return Math.floor(Math.random()*31);
}

function bowlGame(){
	scores = [];
	$("#thegame").empty;
	var total = 0;
	for(var idx =0; idx < 10; idx++){
		scores[idx] = randNumber();
		$("#thegame").append("<td>" + scores[idx] + "</td>");
		console.log("frame", idx+1,"score is", scores[idx]);
		total += scores[idx];
	}
	$("#thegame").append("<td>" + total + "</td>");
	console.log("total score is", total);

}

