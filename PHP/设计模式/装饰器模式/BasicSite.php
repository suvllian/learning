<?php
//文件名BasicSite.php
include_once("IComponment.php");
class BasicSite extends IComponment
{
	public function __construct()
	{
		$this->site = "Basic Site";
	}

	public function getSite()
	{
		return $this->site;
	}

	public function getPrice()
	{
		return 1200;
	}

}