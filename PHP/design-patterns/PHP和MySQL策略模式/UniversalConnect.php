<?php
include_once('IConnectInfo.php');
class UniversalConnect implements IConnectInfo
{
	private static $Server    = IConnectInfo::Host;
	private static $CurrentDB = IConnectInfo::DBName;
	private static $User      = IConnectInfo::UserName;
	private static $Password  = IConnectInfo::Password;
	private static $HookUp;
	public function doConnect(){
		self::$HookUp = mysqli_connect(self::$Server,self::$User,self::$Password,self::$CurrentDB);
		self::$HookUp->set_charset("utf8");
		if(self::$HookUp){
			
		}elseif(mysqli_connect_error(self::$HookUp)){
			echo "Fail: ".mysqli_connect_error;
		}
		return self::$HookUp;
	}
}
?>