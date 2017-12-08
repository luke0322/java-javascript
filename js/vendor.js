"use strict"

$().ready(function() {
    $("#getpk").click(function(){
        console.log("Button clicked");
        var inputid = $("#pk").val();
        getData(inputid);
    });

    console.log("After JSON call");
});

function fillData(product){
	//build the table rows
    $("#idx").val(product.ID);
    $("#name").val(product.Name);
    $("#price").val(product.Price);
    $("#unit").val(product.Unit);
    $("#vendorpartnumber").val(product.VendorPartNumber);
}

function getData(inputid){
    
    $.getJSON("http://prs.doudsystems.com/Products/Get/" + inputid)
        .done(function(product){
            console.log(product);
            fillData(product);
        });
}
