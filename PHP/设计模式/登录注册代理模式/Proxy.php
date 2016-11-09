<?php
include_once('ISubject.php');
include_once('RealSubject.php');
include_once('UniversalConnect.php');

class Proxy implements ISubject
{
	private $TableMaster;
	private $HookUp;
	private $LoginSuccess;
	private $RealSubject;
	
	public function login($UserNow,$PassNow)
	{
		$UserName = $UserNow;
		$PassWord = md5($PassNow);
		$this->LoginSuccess = false;
		$this->TableMaster  = "BAdmin";
		$this->HookUp		= UniversalConnect::doConnect();
		
		$sql = "SELECT password from $this->TableMaster WHERE username = '$UserName'";
		if($result = $this->HookUp->query($sql))
		{
			$row = $result->fetch_array(MYSQLI_ASSOC);
			if($row['password']==$PassWord)
			{
				$this->LoginSuccess = true;
			}
			$result->close();
		}
		elseif(($result = $this->HookUp->query($sql))===false)
		{
			echo "Failed".$this->HookUp->error;
			exit();
		}
		$this->HookUp->close();
		if($this->LoginSuccess)
		{
			$this->request();
		}
		else
		{
			header("Location:index.php");
		}
	}
	public function register($UserNow,$PassNow)
	{
		$UserName = $UserNow;
		$PassWord = md5($PassNow);
		$this->LoginSuccess = false;
		$this->TableMaster  = "BAdmin";
		$this->HookUp		= UniversalConnect::doConnect();
		
		$sql = "INSERT INTO $this->TableMaster VALUES('$UserName','$PassWord')";
		if($result = $this->HookUp->query($sql))
		{
			$this->LoginSuccess = true;
		}
		elseif(($result = $this->HookUp->query($sql))===false)
		{
			echo "Failed".$this->HookUp->error;
			exit();
			//header("Location:index.php");
		}
		$this->HookUp->close();
		if($this->LoginSuccess)
		{
			echo "<script>alert('Success!');</script>";
		}
		else
		{
			header("Location:index.php");
		}
	}
	public function request()
	{
		$this->realSubject = new RealSubject();
		$this->realSubject->request();
	}
}
?>