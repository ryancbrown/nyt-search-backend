// NYT API key
var apiKey = 'uYymKG8bNNTUT4IcWDvSbFfCC5t9vL1a';
// NYT Article Search endpoint
var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=' + apiKey

// Test listener to test grabbing values on button submit
// To be stored and later used to modiify the parameters in the call to the Article Search endpoint
var search = $('#submit').on('click', function(){ 
    var search = $('#text').val()
    return search
});

// Connect to NYT
$.ajax({
    url: url,
    method: 'GET'
}).then(function(response){ 
	// Log response received from NYT
	console.log(response)
    
    for (var i = 0; i < response.response.docs.length; i++) {
    	// Headline
    	$('#content').append('<h3>' + response.response.docs[i].headline.main + '</h3>')

    	// Section
    	if (response.response.docs[i].news_desk !== '') { 
    		$('#content').append('Section: ' + response.response.docs[i].news_desk + '<br>') 
    	} else { 
    		$('#content').append('Section: ' + response.response.docs[i].section_name + '<br>')
    	}

    	// Publish Date
    	$('#content').append(response.response.docs[i].pub_date + '<br>')

    	// URL
    	$('#content').append('<a href="' + response.response.docs[i].web_url + '" target="_blank">' + response.response.docs[i].web_url + '</a><br><br>')
	}
});

