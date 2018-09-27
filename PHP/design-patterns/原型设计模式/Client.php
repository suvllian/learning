<?php

function __autoload($ClassName)
{
	include $ClassName.".php";
}

class Client
{
	private $Market;
	private $Engineer;
	private $Management;
	
	public function __construct()
	{
		$this->MakeConProto();
		
		$Tess = clone $this->Market;
		$this->SetEmployee($Tess,"Tess Smith",101,"ts101-1234","tess.png");
		$this->ShowEmployee($Tess);
		
		$MSuv = clone $this->Management;
		$this->SetEmployee($MSuv,"Jack",102,"7241301","MSuv.png");
		$this->ShowEmployee($MSuv);
		
		$ESuv = clone $this->Engineer;
		$this->SetEmployee($ESuv,"Tom",103,"18092978681","engineer.png");
		$this->ShowEmployee($ESuv);
		
		$TSuv = clone $this->Market;
		$this->SetEmployee($TSuv,"Nothing",105,"ts101-1234","nothing.png");
		$this->ShowEmployee($TSuv);
	}
	
	private function MakeConProto()
	{
		$this->Market = new Marketing();
		$this->Engineer = new Engineering();
		$this->Management = new Management();
	}
	
	private function ShowEmployee(IAcmePrototype $EmployeeNow)
	{
		echo $EmployeeNow->GetPic()."<br/>";
		echo $EmployeeNow->GetId()."<br/>";
		echo $EmployeeNow->GetDept()."<br/>";
		echo $EmployeeNow->GetName()."<br/><br/>";
	}
	
	private function SetEmployee(IAcmePrototype $EmployeeNow,$Name,$Dept,$Id,$Pic)
	{
		$EmployeeNow->SetName($Name);
		$EmployeeNow->SetDept($Dept);
		$EmployeeNow->SetId($Id);
		$EmployeeNow->SetPic($Pic);
	}
}

$Worker = new Client();