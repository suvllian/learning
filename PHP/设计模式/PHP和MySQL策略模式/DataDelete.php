<?php
include_once("IStrategy.php");
include_once("UniversalConnect.php");
class DataDelete implements IStrategy
{
	private $HookUp;
	public function algorithm()
	{
		$this->HookUp = UniversalConnect::doConnect();
		$Test   = $this->HookUp->real_escape_string("sqs");
		echo "here data".$Test."is deleted <br/>";
		$this->HookUp->close();
	}
}