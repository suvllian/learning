<?php
include_once("Decorator.php");
class Video extends Decorator
{
	public function __construct(IComponment $SiteNow)
	{
		$this->site = $SiteNow;
	}

	public function getSite()
	{
		$fmat = "Video ";
		return $this->site->getSite().$fmat."<br/>";
	}

	public function getPrice()
	{
		return 1000+$this->site->getPrice();
	}
}
