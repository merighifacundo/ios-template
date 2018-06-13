function environment(AppConfig, $log) {
	'ngInject';
	var env = 'prod';
	AppConfig.environment = env;
    $log.info("Setting the environment to: " + env);
}

angular.module('spec.configuration').run(['AppConfig', '$log', environment]);
