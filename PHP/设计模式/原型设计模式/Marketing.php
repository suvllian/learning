<?php
include_once("IAcmePrototype.php");

class Marketing extends IAcmePrototype
{
	const UINT = "Marketing";
	private $Sales = "sales";
	private $Promotion = "promotion";
	private $Strategic = "strategic planing";
	
	public function SetDept($OrgCode)
	{
		switch($OrgCode)
		{
			case 101:
			$this->Dept = $this->Sales;
			break;
			case 102:
			$this->Dept = $this->Promotion;
			break;
			case 103:
			$this->Dept = $this->Strategic;
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