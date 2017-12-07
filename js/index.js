var nbr = 0; //array of objects here
$().ready(function() {

	console.log("it worked.");
	$("body").css("margin","10px");
	
	$("#inc").click(addNumber);
			
	$("#dec").click(subtractNumber);
	loadTable();
});	
function addNumber(){
	nbr++;
	loadTable();
}

function subtractNumber(){
	nbr--;
	loadTable();
} 

function loadTable(){
	var nbrCtrl = $("#nbr");
	nbrCtrl.val(nbr);
	nbrCtrl.css("color","black");
	nbrCtrl.css("font-style","normal");
	nbrCtrl.css("font-weight","normal");

	if (nbr == 0){
		return;
	}
	if (nbr % 2 ==0){
		nbrCtrl.css("color","red");
	}
	if (nbr % 3 ==0){
		nbrCtrl.css("font-style","italic");
	}
	if (nbr % 7 ==0){
		nbrCtrl.css("font-weight","normal");
	}
}

