<?php
include_once('ISubject.php');
class RealSubject implements ISubject
{
	public function request()
	{
		session_save_path(dirname(__FILE__).'/sess/');
		@session_start();
		$_SESSION['bergift'] = 'admin';
		header("Location:main.php");
	}
}
?>