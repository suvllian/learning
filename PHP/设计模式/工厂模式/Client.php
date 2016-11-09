<?php
include_once("GraphicFactory.php");
include_once("TextFactory.php");

class Client
{
	private $SomeGraphicObject;
	private $SomeTextObject;
	
	public function __construct()
	{
		$this->SomeGraphicObject = new GraphicFactory();
		echo $this->SomeGraphicObject->startFactory()."<br>";
		$this->SomeTextObject = new TextFactory();
		echo $this->SomeTextObject->startFactory()."<br>";
	}
}
$Worker = new Client();
?>