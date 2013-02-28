var webpage = require('webpage'),
		page = webpage.create(),
		fs = require('fs');

page.open('temp-output.html', function(status) {
	page.viewportSize = {
		width: 960,
		height: 522
	};
	page.paperSize = {
		width: 960,
		height: 522
	};
	page.render('output.pdf');

	fs.removeTree('temp-slides');
	fs.remove('temp-output.html');
	phantom.exit();
});
