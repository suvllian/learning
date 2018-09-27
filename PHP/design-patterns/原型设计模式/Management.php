<?php
include_once("IAcmePrototype.php");

class Management extends IAcmePrototype
{
	const UINT = "Management";
	private $Research = "research";
	private $Plan = "planing";
	private $Operations = "operations";
	
	public function SetDept($OrgCode)
	{
		switch($OrgCode)
		{
			case 101:
			$this->Dept = $this->Research;
			break;
			case 102:
			$this->Dept = $this->Plan;
			break;
			case 103:
			$this->Dept = $this->Operations;
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