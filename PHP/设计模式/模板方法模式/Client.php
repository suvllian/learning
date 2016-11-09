<?php
//Client.php
function __autoload($ClassName)
{
	include $ClassName.".php";
}

class Client
{
	function __construct()
	{
		$Caption = "Suvllian";
		$Mo = new ConcreteClass();
		$Mo->templateMethod("1.jpg",$Caption);
	}
}
$Worker = new Client();