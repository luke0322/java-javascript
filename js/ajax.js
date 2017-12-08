"use strict"

$().ready(function() {
	console.log("Before JSON call");
    $.getJSON("http://prs.doudsystems.com/Users/List")
    	.done(function(users){
    		console.log(users);
    		buildTable(users);
    	});
    	console.log("After JSON call");

    $.getJSON("http://prs.doudsystems.com/Vendors/List/")
    	.done(function(vendors){
    		console.log(vendors);
    		buildTable2(vendors);
    	});
});

function buildTable(users){
	//build the table rows
	for (var user of users) {
		console.log(user.FirstName + " " + user.LastName + " " + user.ID);
	}
}
function buildTable2(vendors){
	//build the table rows
	for (var vendor of vendors) {
		console.log(vendor.ID + " " + vendor.Code + " " + vendor.Name);
	}
}
