//Create the buttons
for (var i = 0; i < 256; i++) {
	$(".container").append("<button id='"+i+"' onclick='createAddress'>"+i+"</button>")
};