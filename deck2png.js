var webpage = require('webpage'),
		page = webpage.create(),
    system = require('system'),
    url = system.args[1] || 'index.html',
    fs = require('fs'),
    imageSources = [],
    imageTags;

page.onLoadFinished = function(status) {
	var slideCount;

	if (status !== 'success') {
		console.log('Target file not found.');
		phantom.exit();
	}

	page.viewportSize = {
		width: 960,
		height: 522
	};

	slideCount = page.evaluate(function() {
		var $ = window.jQuery;

		$('html').removeClass('csstransitions cssreflections');
		$('html, body').css({
			'width': 960,
			'height': 522,
			'overflow': 'hidden'
		});
		$.deck('.slide');
		return $.deck('getSlides').length;
	});

	fs.makeDirectory('temp-slides');

	for (var i = 0; i < slideCount; i++) {
		var src = 'temp-slides/output-' + i + '.png';
		imageSources.push(src);
		console.log('Rendering slide #' + i);
		page.render(src);
		page.evaluate(function() {
			var $ = window.jQuery;
			$.deck('next');
		});
	}

	imageTags = imageSources.map(function(src) {
		return '<img src="' + src + '" style="dispay:block;" width="100%">';
	});

	var output = imageTags.join('') + '<style>*{margin:0;padding:0}</style>';
	fs.write('temp-output.html', output, 'w');

	phantom.exit();
};

page.open(url);
