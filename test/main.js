require.config({
	//baseUrl: '../../',
	paths: {
		//handlebars: '../../src/js/components/handlebars/handlebars',
		jquery: '../../src/js/components/jquery/dist/jquery',
		//flot: '../../src/js/components/Flot/jquery.flot',
		//templates: '../templates',
		//text: '../../src/js/components/text/text',
		jasmine: '../../src/js/components/jasmine/lib/jasmine-core/jasmine',
		'jasmine-html': '../../src/js/components/jasmine/lib/jasmine-core/jasmine-html',
		'jasmine-boot': '../../src/js/components/jasmine/lib/jasmine-core/boot',
		//domReady: '../../src/js/components/domReady/domReady',
		API: '../../src/js/API',
		//utils: '../../src/js/utils',
		//jasmineJQuery: 'lib/jasmine-2.0.0/jasmine-jquery'
	},
	shim: {
		'jasmine-html': {
			deps: ['jasmine'],
		},
		'jasmine-boot': {
			deps: ['jasmine', 'jasmine-html'],
			exports: 'jasmine'
		}
	}
});

require(['jasmine-boot'], function (jasmine) {

	var jasmineEnv = jasmine.getEnv();

	var specs = [];
	specs.push('spec/api_spec');

	require(specs, function(spec) {
		jasmineEnv.execute();
	});
});