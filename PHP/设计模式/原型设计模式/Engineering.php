<?php
include_once("IAcmePrototype.php");

class Engineering extends IAcmePrototype
{
	const UINT = "Engineering";
	private $Development = "programming";
	private $Design = "digital artwork";
	private $SysAd = "system administration";
	
	public function SetDept($OrgCode)
	{
		switch($OrgCode)
		{
			case 101:
			$this->Dept = $this->Development;
			break;
			case 102:
			$this->Dept = $this->Design;
			break;
			case 103:
			$this->Dept = $this->SysAd;
			break;
			default:
			$this->Dept = "Unknown Marketing";
		}
	}
	
	public function GetDept()
	{
		return $this->Dept;
	}
	
	function __clone(){}
}