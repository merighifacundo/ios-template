function environment(AppConfig, $log) {
	'ngInject';
	var env = 'proxy';
	AppConfig.environment = env;
	AppConfig.isDebugging = true;
	$log.info("Setting the environment to: " + env);
}


angular.module('spec.configuration').run(['AppConfig', '$log', environment]);

angular.module('spec').requires.push('spec.tools');

