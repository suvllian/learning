<?php
include_once("IStrategy.php");
include_once("UniversalConnect.php");
class DataDisplay implements IStrategy
{
	private $HookUp;
	public function algorithm()
	{
		$this->HookUp = UniversalConnect::doConnect();
		$Test   = "All Data";
		echo $Test."<br/>";
		$this->HookUp->close();
	}
}