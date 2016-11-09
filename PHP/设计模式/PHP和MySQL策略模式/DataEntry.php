<?php
include_once("IStrategy.php");
include_once("UniversalConnect.php");
class DataEntry implements IStrategy
{
	private $HookUp;
	private $Sql;

	public function algorithm()
	{
		$this->HookUp = UniversalConnect::doConnect();
		$Test   = $this->HookUp->real_escape_string($_POST['sql']);
		echo "this data has been entry".$Test."<br/>";
		$this->HookUp->close();
	}
}