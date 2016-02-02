<?php
function thrift_autoload($className) {
	$parse = explode('\\', $className);

	if($parse[0] === 'Mesh' && $parse[1] === 'Delivery')
	{
		array_pop($parse);
		$fullpathService = __DIR__ . DIRECTORY_SEPARATOR . implode(DIRECTORY_SEPARATOR, $parse) . DIRECTORY_SEPARATOR . end($parse) . "Service.php";
		$fullpathType = __DIR__. DIRECTORY_SEPARATOR . implode(DIRECTORY_SEPARATOR, $parse) . DIRECTORY_SEPARATOR . "Types.php";

		if(is_readable($fullpathService)) {
			require_once $fullpathService;
		}

		if(is_readable($fullpathType)) {
			require_once $fullpathType;
		}
	}
}

spl_autoload_register('bootake_thrift_autoload');
