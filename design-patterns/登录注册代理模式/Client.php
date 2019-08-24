<?php
include_once('Proxy.php');
class Client
{
	private $Proxy;
	private $UserName;
	private $PassWord;
	
	public function __construct()
	{
		$this->TableMaster = 'BAdmin';
		$this->HookUp      = UniversalConnect::doConnect();
		$this->UserName    = $this->HookUp->real_escape_string(trim($_POST['username']));
		$this->PassWord    = $this->HookUp->real_escape_string(trim($_POST['password']));
		if($_GET['do']==='register')
		{
			$this->getRegis($this->proxy=new Proxy());
		}elseif($_GET['do']==='login')
		{
			$this->getIface($this->proxy=new Proxy());
		}
	}
	private function getIface(ISubject $proxy)
	{
		$proxy->login($this->UserName,$this->PassWord);
	}
	private function getRegis(ISubject $proxy)
	{
		$proxy->register($this->UserName,$this->PassWord);
	}
}
$Worker = new Client();
?>