<?php
include_once("IStrategy.php");
include_once("UniversalConnect.php");
class DataSearch implements IStrategy
{
	private $HookUp;
	public function algorithm()
	{
		$this->HookUp = UniversalConnect::doConnect();
		$Test   = $this->HookUp->real_escape_string("sqs");
		echo "here is data you looking for".$Test."<br/>";
		$this->HookUp->close();
	}
}