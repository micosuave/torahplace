module.exports = function(dl, num) {
	num = num || 1;

	dl.on('start', function() {
		console.log('EVENT - Download '+ num +' started !');
	});

	dl.on('error', function() {
		console.warn('EVENT - Download '+ num +' error !');
		console.warn(dl.error);
	});

	dl.on('end', function() {
		console.log('EVENT - Download '+ num +' finished !');

		console.log(dl.getStats());
	});

	dl.on('retry', function() {
		console.log('EVENT - Download '+ num +' error, retrying...');
	});

	dl.on('stopped', function() {
		console.info('EVENT - Download '+ num +' stopped...');
	});

	dl.on('destroyed', function() {
		console.error('EVENT - Download '+ num +' destroyed...');
	});
};