importScripts("other.js");

var a = 0;
for (var i = 100000; i >= 0; i--) {
	a++;
}

// self.close();

onmessage = function(e) {
	postMessage({
		input: e.data,
		result: a
	});
}

postMessage({
	test: 1
});