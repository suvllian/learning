<?php
include_once("Decorator.php");
class Maintenance extends Decorator
{
	public function __construct(IComponment $SiteNow)
	{
		$this->site = $SiteNow;
	}

	public function getSite()
	{
		$fmat = "<br/>"."Maintenance ";
		return $this->site->getSite().$fmat."<br/>";
	}

	public function getPrice()
	{
		return 950+$this->site->getPrice();
	}
}
