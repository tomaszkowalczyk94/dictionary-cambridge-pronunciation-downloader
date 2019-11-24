$(".dpron-i").each( function() {
	
	var downloadIcon = chrome.extension.getURL("download.png");
	console.log(downloadIcon);
	var urlToFile = $(this).find("source[type='audio/mpeg']").attr("src");
	console.log(urlToFile);
	var downloadButtonHtml = "<a href=\""+urlToFile+"\" download><img alt=\"download\" src=\""+downloadIcon+"\"></a>";
	$(this).find( "span" ).first().append( downloadButtonHtml);
	
});


