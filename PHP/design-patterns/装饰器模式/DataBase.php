<?php
include_once("Decorator.php");
class DataBase extends Decorator
{
	public function __construct(IComponment $SiteNow)
	{
		$this->site = $SiteNow;
	}

	public function getSite()
	{
		$fmat = "DataBase ";
		return $this->site->getSite().$fmat;
	}

	public function getPrice()
	{
		return 800+$this->site->getPrice();
	}
}
