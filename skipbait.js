(function() {
	console.log('skipbait init');
	
	window.onclick = function(e) {
		if(e.target.tagName == "A") {
			
		} else {
			var parentLink = $(e.target).parents('a');
			if(parentLink.length > 0) {

			} else {
				return true;
			}
		}
	}
	
	// for(var link in links) {
	// 	links[link].onclick = function(e) {
	// 		var origLink = this.href;

	// 		if(!origLink.match(/https?:\/\/*/g)) return true;

	// 		e.preventDefault();
			
	// 		getSources(origLink, function(data) {
	// 			var skipRsp = JSON.parse(data.response);
				
	// 			if(skipRsp.sources.length > 1) {
	// 				console.log(e);
	// 				//addPopup()
	// 			} else if (skipRsp.sources.length == 1) {
	// 				//window.location.href = skipRsp.sources[0];
	// 			} else {
	// 				//window.location.href = origLink;
	// 			}
	// 		});
	// 	}
	// }

	var onSourcesLoaded = function() {
		
	}

	var addPopup = function(x,y,sources,origLink) {

	};

	var getSources = function(url, callback) {
		var req = new XMLHttpRequest();
		
		req.onreadystatechange = function() {
			if (req.readyState == 4) {
				if(req.status == 200){
					if(callback) callback(req);
				}
			}
		};

		req.open('GET', 'https://skipbait.herokuapp.com/skip/' + encodeURIComponent(url), true);
		req.send();
	};
})();