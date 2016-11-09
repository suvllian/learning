<?php
function __autoload($ClassName)
{
	include $ClassName.".php";
}
$trigger = new Client();
$trigger->insertData();