
/*
var CONFIG = new Object();
CONFIG.Link = new Object();
CONFIG.Link.index = "index.html";
CONFIG.Link.introduction = "introduction.html";
CONFIG.Link.product = "product.html";
CONFIG.Link.contact = "contact.html";
*/

$(document).ready(function(){
	$("#menubar").find(".unselected").hover( 
    function(){
    	$(this).removeClass("unselected");
    	$(this).addClass("hover");
    }, 
    function(){
    	$(this).removeClass("hover");
    	$(this).addClass("unselected");
    }    
	);
});
