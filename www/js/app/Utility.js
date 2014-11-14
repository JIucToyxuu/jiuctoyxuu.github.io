define(['jquery'], function($){
	function bindings(elementDOM, event, callbacks) {
		$(elementDOM).on(event ,function(element){
			element.preventDefault(); //form no reload
			$.each(callbacks, function(index, callback){
				callback();
			});
		});
	}
	function loadCss(paths) {
		$.each(paths, function(index, path) {
			var link = document.createElement("link");
			link.rel = "stylesheet";
			link.href = path;
			$("head")[0].appendChild(link);
		});
	}
	return {
		bindings: bindings,
		loadCss: loadCss
	};
});