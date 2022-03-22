$(".dpron-i").each( function() {
	
	var downloadIcon = chrome.extension.getURL("download.png");
	var urlToFile = $(this).find("source[type='audio/mpeg']").attr("src");
	console.log(urlToFile);
	var downloadButtonHtml = "<a href=\""+urlToFile+"\" download><img alt=\"download\" src=\""+downloadIcon+"\"></a>";
	$(this).find( "span" ).first().append( downloadButtonHtml);
	
});

$(".hws h1").each( function() {

	var downloadIcon = chrome.extension.getURL("download.png");
	var urlToFile = $(this).find(".audioIcon").attr("data-audio-url");
	console.log(urlToFile);
	var downloadButtonHtml = "<a href=\""+urlToFile+"\" download><img alt=\"download\" src=\""+downloadIcon+"\"></a>";
	$(this).find( "span" ).first().append( downloadButtonHtml);

});


