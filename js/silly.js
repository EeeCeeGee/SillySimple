var SILLY = (function(module) {
	module.DoIt = function(resultObject) {
		resultObject.prepend('Dit is de datum ' +Date() + '<br/>');
	};

	return module;

}(SILLY || {}));
