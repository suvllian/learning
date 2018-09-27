<?php
class EuroCalc
{
	private $euro;
	private $product;
	private $service;
	private $rate = 1;

	public function requestCalc($ProductNow,$SerivceNow)
	{
		$this->product = $ProductNow;
		$this->service = $SerivceNow;
		$this->euro  = $this->product + $this->service;

		return $this->requestTotal();
	}

	public function requestTotal()
	{
		$this->euro *= $this->rate;
		return $this->euro;
	}
}