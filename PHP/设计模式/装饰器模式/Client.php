<?php
function __autoload($ClassName)
{
	include $ClassName.".php";
}
class Client
{
	private $BasicSite;

	public function __construct()
	{
		$this->BasicSite = new BasicSite();
		$this->BasicSite = $this->WarpComponment($this->BasicSite);

		$SiteNow = $this->BasicSite->getSite();
		$format  = "<br/>Total=$";
		$price   = $this->BasicSite->getPrice();

		echo $SiteNow.$format.$price;
	}

	private function WarpComponment(IComponment $Componment)
	{
		$Componment = new Maintenance($Componment);
		$Componment = new Video($Componment);
		$Componment = new DataBase($Componment);
		return $Componment;
	}
}

$Worker = new Client();