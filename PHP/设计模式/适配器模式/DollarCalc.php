<?php
class DollarCalc
{
	private $dollar;
	private $product;
	private $service;
	private $rate = 1;

	public function requestCalc($ProductNow,$SerivceNow)
	{
		$this->product = $ProductNow;
		$this->service = $SerivceNow;
		$this->dollar  = $this->product + $this->service;

		return $this->requestTotal();
	}

	public function requestTotal()
	{
		$this->dollar *= $this->rate;
		return $this->dollar;
	}
}
