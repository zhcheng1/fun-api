exports.getFileType = function(fileType) {
	switch(fileType) {
		case '.html':
			return 'text/html';
		case '.css':
			return 'text/css';
		case '.js':
			return 'text/javascript';
		default:
			return 'text/html';
	}
}