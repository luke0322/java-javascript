"use strict"

$().ready(function() {

    $("#getpk").click(function(){
        console.log("Button clicked");
        var inputid = $("#products").val();
        getData(inputid);
    });

    $.getJSON("http://prs.doudsystems.com/Products/List")
        .done(function(products){
            console.log(products);
            loadDropdown(products);
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

function loadDropdown(products){
    var select = $("#products");
    for (var product of products){
        var option = "<option value='" + product.ID + "'>" + product.Name + " " + product.Price+ "</option>";
        select.append(option);
            }

}

function getData(inputid){

    $.getJSON("http://prs.doudsystems.com/Products/Get/" + inputid)
        .done(function(product){
            console.log(product);
            fillData(product);
        }).fail(function(){

        });
}

