<?php
abstract class IAcmePrototype
{
	protected $Name;
	protected $Id;
	protected $EmployeePic;
	protected $Dept;
	
	abstract function SetDept($OrgCode);
	abstract function GetDept();
	
	public function SetName($EmName)
	{
		$this->Name = $EmName;
	}
	
	public function GetName()
	{
		return $this->Name;
	}
	
	public function SetId($EmId)
	{
		$this->Id = $EmId;
	}
	
	public function GetId()
	{
		return $this->Id;
	}
	
	public function SetPic($EPic)
	{
		$this->EmployeePic = $EPic;
	}
	
	public function GetPic()
	{
		return $this->EmployeePic;
	}
	abstract function __clone();
}
